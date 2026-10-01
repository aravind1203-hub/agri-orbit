const express = require("express");
const cors = require("cors");
const db = require("./db");

const {
  getLatestMarketPrices,
} = require("./marketPriceService");

const app = express();

const PORT = 5000;

// =========================================================
// MIDDLEWARE
// =========================================================

app.use(cors());
app.use(express.json());

// =========================================================
// ROOT API
// =========================================================

app.get("/", (req, res) => {
  res.send("AgriOrbit Backend is Running 🌱");
});

// =========================================================
// LOGIN API
// =========================================================

app.post("/api/login", (req, res) => {
  const {
    email,
    password,
    role,
  } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({
      error: "Email, password and role are required",
    });
  }

  const sql = `
    SELECT
      id,
      name,
      email,
      mobile,
      role
    FROM users
    WHERE email = ?
      AND password = ?
      AND role = ?
    LIMIT 1
  `;

  db.query(
    sql,
    [email, password, role],
    (err, results) => {
      if (err) {
        console.error(
          "Login query error:",
          err.message
        );

        return res.status(500).json({
          error: "Database error during login",
        });
      }

      if (results.length === 0) {
        return res.status(401).json({
          error: "Invalid email or password",
        });
      }

      const user = results[0];

      // =====================================================
      // FARMER LOGIN
      // =====================================================

      if (role === "farmer") {
        const farmerSql = `
          SELECT
            id AS farmer_id,
            user_id,
            district,
            village,
            location,
            crops_grown
          FROM farmers
          WHERE user_id = ?
          LIMIT 1
        `;

        db.query(
          farmerSql,
          [user.id],
          (farmerErr, farmerResults) => {
            if (farmerErr) {
              console.error(
                "Farmer profile query error:",
                farmerErr.message
              );

              return res.status(500).json({
                error:
                  "Unable to load farmer profile",
              });
            }

            if (farmerResults.length === 0) {
              return res.status(404).json({
                error:
                  "Farmer profile not found",
              });
            }

            const farmer = farmerResults[0];

            return res.json({
              message: "Login successful",

              user: {
                ...user,
                farmer_id:
                  farmer.farmer_id,
                district:
                  farmer.district,
                village:
                  farmer.village,
                location:
                  farmer.location,
                crops_grown:
                  farmer.crops_grown,
              },
            });
          }
        );

        return;
      }

      // =====================================================
      // BUYER LOGIN
      // =====================================================

      if (role === "buyer") {
        const buyerSql = `
          SELECT
            id AS buyer_id,
            user_id,
            business_name,
            contact_person,
            district,
            location,
            interested_crops,
            requirement
          FROM buyers
          WHERE user_id = ?
          LIMIT 1
        `;

        db.query(
          buyerSql,
          [user.id],
          (buyerErr, buyerResults) => {
            if (buyerErr) {
              console.error(
                "Buyer profile query error:",
                buyerErr.message
              );

              return res.status(500).json({
                error:
                  "Unable to load buyer profile",
              });
            }

            if (buyerResults.length === 0) {
              return res.status(404).json({
                error:
                  "Buyer profile not found",
              });
            }

            const buyer = buyerResults[0];

            return res.json({
              message: "Login successful",

              user: {
                ...user,
                buyer_id:
                  buyer.buyer_id,
                business_name:
                  buyer.business_name,
                contact_person:
                  buyer.contact_person,
                district:
                  buyer.district,
                location:
                  buyer.location,
                interested_crops:
                  buyer.interested_crops,
                requirement:
                  buyer.requirement,
              },
            });
          }
        );

        return;
      }

      // =====================================================
      // ADMIN LOGIN
      // =====================================================

      return res.json({
        message: "Login successful",
        user,
      });
    }
  );
});

// =========================================================
// BUYER REGISTRATION API
// =========================================================

app.post("/api/register/buyer", (req, res) => {
  const {
    name,
    contactPerson,
    mobile,
    email,
    password,
    district,
    location,
    interestedCrops,
    requirement,
  } = req.body;

  if (
    !name ||
    !mobile ||
    !email ||
    !password ||
    !district ||
    !location ||
    !interestedCrops
  ) {
    return res.status(400).json({
      error:
        "Please fill all required fields",
    });
  }

  const checkSql = `
    SELECT id
    FROM users
    WHERE email = ?
       OR mobile = ?
    LIMIT 1
  `;

  db.query(
    checkSql,
    [email, mobile],
    (err, results) => {
      if (err) {
        console.error(
          "Buyer registration check error:",
          err.message
        );

        return res.status(500).json({
          error: "Database error",
        });
      }

      if (results.length > 0) {
        return res.status(409).json({
          error:
            "Email or mobile number already registered",
        });
      }

      const userSql = `
        INSERT INTO users
        (
          name,
          email,
          mobile,
          password,
          role
        )
        VALUES (?, ?, ?, ?, 'buyer')
      `;

      db.query(
        userSql,
        [
          name,
          email,
          mobile,
          password,
        ],
        (err, userResult) => {
          if (err) {
            console.error(
              "Buyer user insert error:",
              err.message
            );

            return res.status(500).json({
              error:
                "Unable to create buyer account",
            });
          }

          const userId =
            userResult.insertId;

          const buyerSql = `
            INSERT INTO buyers
            (
              user_id,
              business_name,
              contact_person,
              district,
              location,
              interested_crops,
              requirement
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
          `;

          db.query(
            buyerSql,
            [
              userId,
              name,
              contactPerson || "",
              district,
              location,
              interestedCrops,
              requirement || "",
            ],
            (err) => {
              if (err) {
                console.error(
                  "Buyer profile insert error:",
                  err.message
                );

                return res.status(500).json({
                  error:
                    "Unable to create buyer profile",
                });
              }

              return res.status(201).json({
                message:
                  "Buyer registration successful",
                userId,
              });
            }
          );
        }
      );
    }
  );
});

// =========================================================
// FARMER REGISTRATION API
// =========================================================

app.post("/api/register/farmer", (req, res) => {
  const {
    name,
    mobile,
    email,
    password,
    district,
    village,
    location,
    crops,
  } = req.body;

  if (
    !name ||
    !mobile ||
    !email ||
    !password ||
    !district ||
    !village ||
    !location ||
    !crops
  ) {
    return res.status(400).json({
      error:
        "Please fill all required fields",
    });
  }

  const checkSql = `
    SELECT id
    FROM users
    WHERE email = ?
       OR mobile = ?
    LIMIT 1
  `;

  db.query(
    checkSql,
    [email, mobile],
    (err, results) => {
      if (err) {
        console.error(
          "Farmer registration check error:",
          err.message
        );

        return res.status(500).json({
          error: "Database error",
        });
      }

      if (results.length > 0) {
        return res.status(409).json({
          error:
            "Email or mobile number already registered",
        });
      }

      const userSql = `
        INSERT INTO users
        (
          name,
          email,
          mobile,
          password,
          role
        )
        VALUES (?, ?, ?, ?, 'farmer')
      `;

      db.query(
        userSql,
        [
          name,
          email,
          mobile,
          password,
        ],
        (err, userResult) => {
          if (err) {
            console.error(
              "Farmer user insert error:",
              err.message
            );

            return res.status(500).json({
              error:
                "Unable to create farmer account",
            });
          }

          const userId =
            userResult.insertId;

          const farmerSql = `
            INSERT INTO farmers
            (
              user_id,
              district,
              village,
              location,
              crops_grown
            )
            VALUES (?, ?, ?, ?, ?)
          `;

          db.query(
            farmerSql,
            [
              userId,
              district,
              village,
              location,
              crops,
            ],
            (err, farmerResult) => {
              if (err) {
                console.error(
                  "Farmer profile insert error:",
                  err.message
                );

                return res.status(500).json({
                  error:
                    "Unable to create farmer profile",
                });
              }

              return res.status(201).json({
                message:
                  "Farmer registration successful",
                userId,
                farmerId:
                  farmerResult.insertId,
              });
            }
          );
        }
      );
    }
  );
});

// =========================================================
// CROPS API
// =========================================================

app.get("/api/crops", (req, res) => {
  const sql = `
    SELECT *
    FROM crops
    ORDER BY id ASC
  `;

  db.query(
    sql,
    (err, results) => {
      if (err) {
        console.error(
          "Crops query error:",
          err.message
        );

        return res.status(500).json({
          error: "Failed to fetch crops",
        });
      }

      return res.json(results);
    }
  );
});

// =========================================================
// MARKETS API
// =========================================================

app.get("/api/markets", (req, res) => {
  const sql = `
    SELECT *
    FROM markets
  `;

  db.query(
    sql,
    (err, results) => {
      if (err) {
        console.error(
          "Markets query error:",
          err.message
        );

        return res.status(500).json({
          error: "Failed to fetch markets",
        });
      }

      return res.json(results);
    }
  );
});

// =========================================================
// MARKET PRICES API
// =========================================================

app.get("/api/market-prices", (req, res) => {
  const sql = `
    SELECT
      market_prices.id,
      crops.name AS crop,
      markets.name AS market,
      markets.district,
      markets.location,
      market_prices.price_per_kg,
      market_prices.price_per_quintal,
      market_prices.price_date,
      market_prices.source
    FROM market_prices
    JOIN crops
      ON market_prices.crop_id = crops.id
    JOIN markets
      ON market_prices.market_id = markets.id
    ORDER BY
      market_prices.price_date DESC
  `;

  db.query(
    sql,
    (err, results) => {
      if (err) {
        console.error(
          "Market prices query error:",
          err.message
        );

        return res.status(500).json({
          error:
            "Failed to fetch market prices",
        });
      }

      return res.json(results);
    }
  );
});

// =========================================================
// BUYERS API
// =========================================================

app.get("/api/buyers", (req, res) => {
  const sql = `
    SELECT
      b.id,
      u.id AS user_id,
      u.name,
      u.mobile,
      b.contact_person,
      b.district,
      b.location,
      b.interested_crops,
      b.requirement
    FROM buyers b
    JOIN users u
      ON b.user_id = u.id
    ORDER BY b.id DESC
  `;

  db.query(
    sql,
    (err, results) => {
      if (err) {
        console.error(
          "Buyers query error:",
          err.message
        );

        return res.status(500).json({
          error: "Failed to fetch buyers",
        });
      }

      return res.json(results);
    }
  );
});

// =========================================================
// BUYER REQUIREMENTS API
// =========================================================

app.get(
  "/api/buyer-requirements",
  (req, res) => {
    const sql = `
      SELECT
        br.id,
        u.name AS buyer,
        b.district,
        b.location,
        c.name AS crop,
        br.quantity_kg,
        br.expected_price_per_kg,
        br.status
      FROM buyer_requirements br
      JOIN buyers b
        ON br.buyer_id = b.id
      JOIN users u
        ON b.user_id = u.id
      JOIN crops c
        ON br.crop_id = c.id
      ORDER BY br.id DESC
    `;

    db.query(
      sql,
      (err, results) => {
        if (err) {
          console.error(
            "Buyer requirements query error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Unable to load buyer requirements",
            details:
              err.message,
          });
        }

        return res.json(results);
      }
    );
  }
);

// =========================================================
// FARMER DETAILS API
// =========================================================

app.get(
  "/api/farmers/:id",
  (req, res) => {
    const farmerId =
      req.params.id;

    const sql = `
      SELECT
        f.id AS farmer_id,
        f.user_id,
        u.name,
        u.email,
        u.mobile,
        f.district,
        f.village,
        f.location,
        f.crops_grown
      FROM farmers f
      JOIN users u
        ON f.user_id = u.id
      WHERE f.id = ?
      LIMIT 1
    `;

    db.query(
      sql,
      [farmerId],
      (err, results) => {
        if (err) {
          console.error(
            "Farmer details query error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to fetch farmer details.",
          });
        }

        if (results.length === 0) {
          return res.status(404).json({
            error:
              "Farmer not found.",
          });
        }

        return res.json(results[0]);
      }
    );
  }
);

// =========================================================
// UPDATE FARMER PROFILE
// =========================================================

app.put(
  "/api/farmers/:id",
  (req, res) => {
    const farmerId =
      req.params.id;

    const {
      name,
      mobile,
      email,
      district,
      village,
      location,
      crops,
    } = req.body;

    if (
      !name ||
      !mobile ||
      !email ||
      !district ||
      !village ||
      !crops
    ) {
      return res.status(400).json({
        error:
          "Please fill all required fields.",
      });
    }

    const getUserSql = `
      SELECT user_id
      FROM farmers
      WHERE id = ?
      LIMIT 1
    `;

    db.query(
      getUserSql,
      [farmerId],
      (err, results) => {
        if (err) {
          console.error(
            "Farmer user lookup error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to find farmer.",
          });
        }

        if (results.length === 0) {
          return res.status(404).json({
            error:
              "Farmer not found.",
          });
        }

        const userId =
          results[0].user_id;

        const updateUserSql = `
          UPDATE users
          SET
            name = ?,
            mobile = ?,
            email = ?
          WHERE id = ?
        `;

        db.query(
          updateUserSql,
          [
            name.trim(),
            mobile.trim(),
            email.trim(),
            userId,
          ],
          (err) => {
            if (err) {
              console.error(
                "Farmer user update error:",
                err.message
              );

              return res.status(500).json({
                error:
                  "Failed to update farmer account.",
              });
            }

            const updateFarmerSql = `
              UPDATE farmers
              SET
                district = ?,
                village = ?,
                location = ?,
                crops_grown = ?
              WHERE id = ?
            `;

            db.query(
              updateFarmerSql,
              [
                district.trim(),
                village.trim(),
                location.trim(),
                crops.trim(),
                farmerId,
              ],
              (err) => {
                if (err) {
                  console.error(
                    "Farmer profile update error:",
                    err.message
                  );

                  return res.status(500).json({
                    error:
                      "Failed to update farmer profile.",
                  });
                }

                return res.json({
                  message:
                    "Profile updated successfully.",
                });
              }
            );
          }
        );
      }
    );
  }
);

// =========================================================
// CROP OFFERS API
// =========================================================

app.get(
  "/api/crop-offers",
  (req, res) => {
    const {
      farmer_id,
      buyer_id,
    } = req.query;

    // =======================================================
    // FARMER OFFERS
    // =======================================================

    if (farmer_id) {
      const farmerSql = `
        SELECT
          co.id,
          co.farmer_id,
          co.buyer_id,
          co.crop_id,
          co.quantity_kg,
          co.offered_price_per_kg,
          co.market_id,
          co.status,
          c.name AS crop,
          m.name AS market,
          u.name AS buyer
        FROM crop_offers co
        JOIN crops c
          ON co.crop_id = c.id
        JOIN markets m
          ON co.market_id = m.id
        JOIN buyers b
          ON co.buyer_id = b.id
        JOIN users u
          ON b.user_id = u.id
        WHERE co.farmer_id = ?
        ORDER BY co.id DESC
      `;

      db.query(
        farmerSql,
        [farmer_id],
        (err, results) => {
          if (err) {
            console.error(
              "Farmer crop offers query error:",
              err.message
            );

            return res.status(500).json({
              error:
                "Failed to fetch farmer crop offers.",
            });
          }

          return res.json(results);
        }
      );

      return;
    }

    // =======================================================
    // BUYER RECEIVED OFFERS
    // =======================================================

    if (buyer_id) {
      const buyerSql = `
        SELECT
          co.id,
          co.farmer_id,
          co.buyer_id,
          co.crop_id,
          co.quantity_kg,
          co.offered_price_per_kg,
          co.market_id,
          co.status,
          c.name AS crop,
          m.name AS market,
          u.name AS farmer,
          f.district AS district,
          f.location AS location,
          co.created_at AS received_date
        FROM crop_offers co
        JOIN crops c
          ON co.crop_id = c.id
        JOIN markets m
          ON co.market_id = m.id
        JOIN farmers f
          ON co.farmer_id = f.id
        JOIN users u
          ON f.user_id = u.id
        WHERE co.buyer_id = ?
        ORDER BY co.id DESC
      `;

      db.query(
        buyerSql,
        [buyer_id],
        (err, results) => {
          if (err) {
            console.error(
              "Buyer received offers query error:",
              err.message
            );

            return res.status(500).json({
              error:
                "Failed to fetch buyer received offers.",
              details:
                err.message,
            });
          }

          return res.json(results);
        }
      );

      return;
    }

    return res.status(400).json({
      error:
        "farmer_id or buyer_id is required.",
    });
  }
);

// =========================================================
// SEND CROP OFFER API
// =========================================================

app.post(
  "/api/crop-offers",
  (req, res) => {
    const {
      farmer_id,
      buyer_id,
      crop_id,
      quantity_kg,
      offered_price_per_kg,
      market_id,
    } = req.body;

    if (
      !farmer_id ||
      !buyer_id ||
      !crop_id ||
      !quantity_kg ||
      !offered_price_per_kg ||
      !market_id
    ) {
      return res.status(400).json({
        error:
          "Please provide all required crop offer details.",
      });
    }

    const sql = `
      INSERT INTO crop_offers
      (
        farmer_id,
        buyer_id,
        crop_id,
        quantity_kg,
        offered_price_per_kg,
        market_id,
        status
      )
      VALUES
      (
        ?, ?, ?, ?, ?, ?, 'pending'
      )
    `;

    db.query(
      sql,
      [
        farmer_id,
        buyer_id,
        crop_id,
        quantity_kg,
        offered_price_per_kg,
        market_id,
      ],
      (err, result) => {
        if (err) {
          console.error(
            "Crop offer insert error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Unable to send crop offer.",
            details:
              err.message,
          });
        }

        return res.status(201).json({
          message:
            "Crop offer sent successfully.",
          offer_id:
            result.insertId,
        });
      }
    );
  }
);

// =========================================================
// LATEST MARKET PRICES API
// =========================================================

app.get(
  "/api/latest-market-prices",
  (req, res) => {
    getLatestMarketPrices(
      (err, results) => {
        if (err) {
          console.error(
            "Latest market prices error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to fetch latest market prices",
          });
        }

        return res.json(results);
      }
    );
  }
);

// =========================================================
// UPDATE CROP OFFER STATUS
// =========================================================

app.put(
  "/api/crop-offers/:id/status",
  (req, res) => {
    const offerId =
      req.params.id;

    const { status } = req.body;

    if (
      !status ||
      !["accepted", "rejected"].includes(
        status
      )
    ) {
      return res.status(400).json({
        error:
          "Status must be accepted or rejected.",
      });
    }

    const sql = `
      UPDATE crop_offers
      SET status = ?
      WHERE id = ?
    `;

    db.query(
      sql,
      [status, offerId],
      (err, result) => {
        if (err) {
          console.error(
            "Crop offer status update error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Unable to update crop offer status.",
          });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({
            error:
              "Crop offer not found.",
          });
        }

        return res.json({
          message:
            `Crop offer ${status} successfully.`,
          offer_id:
            Number(offerId),
          status,
        });
      }
    );
  }
);

// =========================================================
// FAVOURITE CROPS API
// =========================================================

app.get(
  "/api/favourite-crops",
  (req, res) => {
    const {
      farmer_id,
    } = req.query;

    if (!farmer_id) {
      return res.status(400).json({
        error:
          "farmer_id is required.",
      });
    }

    const sql = `
      SELECT
        fc.id,
        fc.farmer_id,
        fc.crop_id,
        c.name AS crop,
        fc.created_at
      FROM favourite_crops fc
      JOIN crops c
        ON fc.crop_id = c.id
      WHERE fc.farmer_id = ?
      ORDER BY fc.id DESC
    `;

    db.query(
      sql,
      [farmer_id],
      (err, results) => {
        if (err) {
          console.error(
            "Favourite crops query error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to fetch favourite crops.",
            details:
              err.message,
          });
        }

        return res.json(results);
      }
    );
  }
);

// =========================================================
// ADD FAVOURITE CROP
// =========================================================

app.post(
  "/api/favourite-crops",
  (req, res) => {
    const {
      farmer_id,
      crop_id,
    } = req.body;

    if (!farmer_id || !crop_id) {
      return res.status(400).json({
        error:
          "farmer_id and crop_id are required.",
      });
    }

    const sql = `
      INSERT INTO favourite_crops
      (
        farmer_id,
        crop_id
      )
      VALUES (?, ?)
    `;

    db.query(
      sql,
      [
        farmer_id,
        crop_id,
      ],
      (err, result) => {
        if (err) {
          if (
            err.code ===
            "ER_DUP_ENTRY"
          ) {
            return res.status(409).json({
              error:
                "Crop is already in favourites.",
            });
          }

          console.error(
            "Favourite crop insert error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Unable to add favourite crop.",
            details:
              err.message,
          });
        }

        return res.status(201).json({
          message:
            "Crop added to favourites successfully.",
          favourite_id:
            result.insertId,
        });
      }
    );
  }
);

// =========================================================
// DELETE FAVOURITE CROP
// =========================================================

app.delete(
  "/api/favourite-crops/:id",
  (req, res) => {
    const favouriteId =
      req.params.id;

    const sql = `
      DELETE FROM favourite_crops
      WHERE id = ?
    `;

    db.query(
      sql,
      [favouriteId],
      (err, result) => {
        if (err) {
          console.error(
            "Favourite crop delete error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Unable to remove favourite crop.",
            details:
              err.message,
          });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({
            error:
              "Favourite crop not found.",
          });
        }

        return res.json({
          message:
            "Crop removed from favourites successfully.",
          favourite_id:
            Number(favouriteId),
        });
      }
    );
  }
);

// =========================================================
// PRICE ALERTS API
// =========================================================

app.get(
  "/api/price-alerts",
  (req, res) => {
    const {
      farmer_id,
    } = req.query;

    if (!farmer_id) {
      return res.status(400).json({
        error:
          "farmer_id is required.",
      });
    }

    const sql = `
      SELECT
        pa.id,
        pa.farmer_id,
        pa.crop_id,
        c.name AS crop,
        pa.target_price_per_kg AS target_price,
        pa.market_id,
        m.name AS market
      FROM price_alerts pa
      JOIN crops c
        ON pa.crop_id = c.id
      LEFT JOIN markets m
        ON pa.market_id = m.id
      WHERE pa.farmer_id = ?
      ORDER BY pa.id DESC
    `;

    db.query(
      sql,
      [farmer_id],
      (err, results) => {
        if (err) {
          console.error(
            "Price alerts query error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to fetch price alerts.",
            details:
              err.message,
          });
        }

        return res.json(results);
      }
    );
  }
);

// =========================================================
// CREATE PRICE ALERT
// =========================================================

app.post(
  "/api/price-alerts",
  (req, res) => {
    const {
      farmer_id,
      crop_id,
      target_price_per_kg,
    } = req.body;

    if (
      !farmer_id ||
      !crop_id ||
      !target_price_per_kg
    ) {
      return res.status(400).json({
        error:
          "Please provide farmer, crop and target price.",
      });
    }

    const sql = `
      INSERT INTO price_alerts
      (
        farmer_id,
        crop_id,
        target_price_per_kg
      )
      VALUES (?, ?, ?)
    `;

    db.query(
      sql,
      [
        farmer_id,
        crop_id,
        target_price_per_kg,
      ],
      (err, result) => {
        if (err) {
          console.error(
            "Price alert insert error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Unable to create price alert.",
            details:
              err.message,
          });
        }

        return res.status(201).json({
          message:
            "Price alert created successfully.",
          alert_id:
            result.insertId,
        });
      }
    );
  }
);

// =========================================================
// DELETE PRICE ALERT
// =========================================================

app.delete(
  "/api/price-alerts/:id",
  (req, res) => {
    const alertId =
      req.params.id;

    const sql = `
      DELETE FROM price_alerts
      WHERE id = ?
    `;

    db.query(
      sql,
      [alertId],
      (err, result) => {
        if (err) {
          console.error(
            "Price alert delete error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Unable to delete price alert.",
            details:
              err.message,
          });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({
            error:
              "Price alert not found.",
          });
        }

        return res.json({
          message:
            "Price alert deleted successfully.",
          alert_id:
            Number(alertId),
        });
      }
    );
  }
);

// =========================================================
// ADMIN BACKEND APIs
// =========================================================

// =========================================================
// 1. ADMIN - MANAGE FARMERS
// =========================================================

app.get(
  "/api/admin/farmers",
  (req, res) => {
    const sql = `
      SELECT
        f.id AS farmer_id,
        f.user_id,
        u.name,
        u.mobile,
        u.email,
        f.district,
        f.village,
        f.location,
        f.crops_grown,
        f.status,
        u.role
      FROM farmers f
      JOIN users u
        ON f.user_id = u.id
      ORDER BY f.id DESC
    `;

    db.query(
      sql,
      (err, results) => {
        if (err) {
          console.error(
            "Admin farmers query error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to fetch farmers.",
          });
        }

        return res.json(results);
      }
    );
  }
);

app.put(
  "/api/admin/farmers/:id/status",
  (req, res) => {
    const { id } =
      req.params;

    const { status } =
      req.body;

    if (
      !["Active", "Blocked"].includes(
        status
      )
    ) {
      return res.status(400).json({
        error:
          "Invalid status.",
      });
    }

    const sql = `
      UPDATE farmers
      SET status = ?
      WHERE id = ?
    `;

    db.query(
      sql,
      [status, id],
      (err, result) => {
        if (err) {
          console.error(
            "Admin farmer status update error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to update farmer status.",
          });
        }

        if (
          result.affectedRows === 0
        ) {
          return res.status(404).json({
            error:
              "Farmer not found.",
          });
        }

        return res.json({
          message:
            `Farmer status updated to ${status}.`,
          status,
        });
      }
    );
  }
);

// =========================================================
// 2. ADMIN - MANAGE BUYERS
// =========================================================

app.get(
  "/api/admin/buyers",
  (req, res) => {
    const sql = `
      SELECT
        b.id AS buyer_id,
        b.user_id,
        u.name,
        u.mobile,
        u.email,
        b.business_name,
        b.contact_person,
        b.district,
        b.location,
        b.interested_crops,
        b.requirement,
        b.status,
        u.role
      FROM buyers b
      JOIN users u
        ON b.user_id = u.id
      ORDER BY b.id DESC
    `;

    db.query(
      sql,
      (err, results) => {
        if (err) {
          console.error(
            "Admin buyers query error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to fetch buyers.",
          });
        }

        return res.json(results);
      }
    );
  }
);

app.put(
  "/api/admin/buyers/:id/status",
  (req, res) => {
    const { id } =
      req.params;

    const { status } =
      req.body;

    if (
      !["Active", "Blocked"].includes(
        status
      )
    ) {
      return res.status(400).json({
        error:
          "Invalid status.",
      });
    }

    const sql = `
      UPDATE buyers
      SET status = ?
      WHERE id = ?
    `;

    db.query(
      sql,
      [status, id],
      (err, result) => {
        if (err) {
          console.error(
            "Admin buyer status update error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to update buyer status.",
          });
        }

        if (
          result.affectedRows === 0
        ) {
          return res.status(404).json({
            error:
              "Buyer not found.",
          });
        }

        return res.json({
          message:
            `Buyer status updated to ${status}.`,
          status,
        });
      }
    );
  }
);

// =========================================================
// 3. ADMIN - MANAGE CROPS
// =========================================================

app.get(
  "/api/admin/crops",
  (req, res) => {
    const sql = `
      SELECT
        id,
        name,
        category,
        image,
        status
      FROM crops
      ORDER BY id ASC
    `;

    db.query(
      sql,
      (err, results) => {
        if (err) {
          console.error(
            "Admin crops query error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to fetch crops.",
            details:
              err.message,
          });
        }

        return res.json(results);
      }
    );
  }
);

// =========================================================
// ADMIN - ADD CROP
// =========================================================

app.post(
  "/api/admin/crops",
  (req, res) => {
    const {
      name,
      category,
      image,
    } = req.body;

    if (
      !name ||
      !category
    ) {
      return res.status(400).json({
        error:
          "Crop name and category are required.",
      });
    }

    const sql = `
      INSERT INTO crops
      (
        name,
        category,
        image,
        status
      )
      VALUES
      (
        ?, ?, ?, 'Active'
      )
    `;

    db.query(
      sql,
      [
        name.trim(),
        category.trim(),
        image || "",
      ],
      (err, result) => {
        if (err) {
          console.error(
            "Admin add crop error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to add crop.",
            details:
              err.message,
          });
        }

        return res.status(201).json({
          message:
            "Crop added successfully.",
          cropId:
            result.insertId,
        });
      }
    );
  }
);

// =========================================================
// ADMIN - EDIT CROP
// =========================================================

app.put(
  "/api/admin/crops/:id",
  (req, res) => {
    const { id } =
      req.params;

    const {
      name,
      category,
      image,
    } = req.body;

    if (
      !name ||
      !category
    ) {
      return res.status(400).json({
        error:
          "Crop name and category are required.",
      });
    }

    const sql = `
      UPDATE crops
      SET
        name = ?,
        category = ?,
        image = ?
      WHERE id = ?
    `;

    db.query(
      sql,
      [
        name.trim(),
        category.trim(),
        image || "",
        id,
      ],
      (err, result) => {
        if (err) {
          console.error(
            "Admin edit crop error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to edit crop.",
            details:
              err.message,
          });
        }

        if (
          result.affectedRows === 0
        ) {
          return res.status(404).json({
            error:
              "Crop not found.",
          });
        }

        return res.json({
          message:
            "Crop updated successfully.",
        });
      }
    );
  }
);

// =========================================================
// ADMIN - ENABLE / DISABLE CROP
// =========================================================

app.put(
  "/api/admin/crops/:id/status",
  (req, res) => {
    const { id } =
      req.params;

    const { status } =
      req.body;

    if (
      !["Active", "Inactive"].includes(
        status
      )
    ) {
      return res.status(400).json({
        error:
          "Invalid crop status.",
      });
    }

    const sql = `
      UPDATE crops
      SET status = ?
      WHERE id = ?
    `;

    db.query(
      sql,
      [status, id],
      (err, result) => {
        if (err) {
          console.error(
            "Admin crop status update error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to update crop status.",
            details:
              err.message,
          });
        }

        if (
          result.affectedRows === 0
        ) {
          return res.status(404).json({
            error:
              "Crop not found.",
          });
        }

        return res.json({
          message:
            `Crop status updated to ${status}.`,
          status,
        });
      }
    );
  }
);

// =========================================================
// 4. ADMIN - MANAGE MARKETS
// =========================================================

// GET - View all markets
app.get(
  "/api/admin/markets",
  (req, res) => {
    const sql = `
      SELECT
        id,
        name,
        district,
        location,
        status,
        created_at
      FROM markets
      ORDER BY id ASC
    `;

    db.query(
      sql,
      (err, results) => {
        if (err) {
          console.error(
            "Admin markets query error:",
            err.message
          );

          return res.status(500).json({
            error: "Failed to fetch markets.",
          });
        }

        return res.json(results);
      }
    );
  }
);


// POST - Add new market
app.post(
  "/api/admin/markets",
  (req, res) => {
    const {
      name,
      district,
      location,
    } = req.body;

    if (
      !name ||
      !district ||
      !location
    ) {
      return res.status(400).json({
        error:
          "Market name, district and location are required.",
      });
    }

    const sql = `
      INSERT INTO markets
      (
        name,
        district,
        location,
        status
      )
      VALUES (?, ?, ?, 'active')
    `;

    db.query(
      sql,
      [
        name.trim(),
        district.trim(),
        location.trim(),
      ],
      (err, result) => {
        if (err) {
          console.error(
            "Admin market add error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to add market.",
          });
        }

        return res.status(201).json({
          message:
            "Market added successfully.",
          marketId: result.insertId,
        });
      }
    );
  }
);


// PUT - Edit market
app.put(
  "/api/admin/markets/:id",
  (req, res) => {
    const { id } = req.params;

    const {
      name,
      district,
      location,
    } = req.body;

    if (
      !name ||
      !district ||
      !location
    ) {
      return res.status(400).json({
        error:
          "Market name, district and location are required.",
      });
    }

    const sql = `
      UPDATE markets
      SET
        name = ?,
        district = ?,
        location = ?
      WHERE id = ?
    `;

    db.query(
      sql,
      [
        name.trim(),
        district.trim(),
        location.trim(),
        id,
      ],
      (err, result) => {
        if (err) {
          console.error(
            "Admin market edit error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to update market.",
          });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({
            error:
              "Market not found.",
          });
        }

        return res.json({
          message:
            "Market updated successfully.",
        });
      }
    );
  }
);


// PUT - Enable / Disable market
app.put(
  "/api/admin/markets/:id/status",
  (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (
      !["active", "inactive"].includes(
        status
      )
    ) {
      return res.status(400).json({
        error:
          "Invalid market status.",
      });
    }

    const sql = `
      UPDATE markets
      SET status = ?
      WHERE id = ?
    `;

    db.query(
      sql,
      [status, id],
      (err, result) => {
        if (err) {
          console.error(
            "Admin market status error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to update market status.",
          });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({
            error:
              "Market not found.",
          });
        }

        return res.json({
          message:
            status === "active"
              ? "Market enabled successfully."
              : "Market disabled successfully.",
        });
      }
    );
  }
);


// =========================================================
// 5. ADMIN - MANAGE PRICES
// =========================================================

// =========================================================
// 6. ADMIN - MANAGE OFFERS
// =========================================================

app.get(
  "/api/admin/offers",
  (req, res) => {
    const sql = `
      SELECT
        co.id,
        co.farmer_id,
        co.buyer_id,
        co.crop_id,
        co.market_id,
        c.name AS crop,
        uf.name AS farmer,
        ub.name AS buyer,
        m.name AS market,
        co.quantity_kg,
        co.offered_price_per_kg,
        co.status,
        co.created_at
      FROM crop_offers co
      JOIN crops c
        ON co.crop_id = c.id
      JOIN farmers f
        ON co.farmer_id = f.id
      JOIN users uf
        ON f.user_id = uf.id
      JOIN buyers b
        ON co.buyer_id = b.id
      JOIN users ub
        ON b.user_id = ub.id
      JOIN markets m
        ON co.market_id = m.id
      ORDER BY co.id DESC
    `;

    db.query(
      sql,
      (err, results) => {
        if (err) {
          console.error(
            "Admin offers query error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to fetch crop offers.",
          });
        }

        return res.json(results);
      }
    );
  }
);

// =========================================================
// 7. ADMIN - REPORTS
// =========================================================

app.get(
  "/api/admin/reports",
  (req, res) => {
    const queries = {
      farmers: `
        SELECT COUNT(*) AS total
        FROM farmers
      `,

      buyers: `
        SELECT COUNT(*) AS total
        FROM buyers
      `,

      crops: `
        SELECT COUNT(*) AS total
        FROM crops
      `,

      markets: `
        SELECT COUNT(*) AS total
        FROM markets
      `,

      offers: `
        SELECT COUNT(*) AS total
        FROM crop_offers
      `,

      pendingOffers: `
        SELECT COUNT(*) AS total
        FROM crop_offers
        WHERE status = 'pending'
      `,

      acceptedOffers: `
        SELECT COUNT(*) AS total
        FROM crop_offers
        WHERE status = 'accepted'
      `,

      rejectedOffers: `
        SELECT COUNT(*) AS total
        FROM crop_offers
        WHERE status = 'rejected'
      `,

      priceRecords: `
        SELECT COUNT(*) AS total
        FROM market_prices
      `,
    };

    db.query(
      queries.farmers,
      (err, farmerResults) => {
        if (err) {
          console.error(
            "Admin reports farmers error:",
            err.message
          );

          return res.status(500).json({
            error:
              "Failed to generate reports.",
          });
        }

        db.query(
          queries.buyers,
          (err, buyerResults) => {
            if (err) {
              console.error(
                "Admin reports buyers error:",
                err.message
              );

              return res.status(500).json({
                error:
                  "Failed to generate reports.",
              });
            }

            db.query(
              queries.crops,
              (err, cropResults) => {
                if (err) {
                  console.error(
                    "Admin reports crops error:",
                    err.message
                  );

                  return res.status(500).json({
                    error:
                      "Failed to generate reports.",
                  });
                }

                db.query(
                  queries.markets,
                  (err, marketResults) => {
                    if (err) {
                      console.error(
                        "Admin reports markets error:",
                        err.message
                      );

                      return res.status(500).json({
                        error:
                          "Failed to generate reports.",
                      });
                    }

                    db.query(
                      queries.offers,
                      (err, offerResults) => {
                        if (err) {
                          console.error(
                            "Admin reports offers error:",
                            err.message
                          );

                          return res.status(500).json({
                            error:
                              "Failed to generate reports.",
                          });
                        }

                        db.query(
                          queries.pendingOffers,
                          (err, pendingResults) => {
                            if (err) {
                              console.error(
                                "Admin reports pending offers error:",
                                err.message
                              );

                              return res.status(500).json({
                                error:
                                  "Failed to generate reports.",
                              });
                            }

                            db.query(
                              queries.acceptedOffers,
                              (err, acceptedResults) => {
                                if (err) {
                                  console.error(
                                    "Admin reports accepted offers error:",
                                    err.message
                                  );

                                  return res.status(500).json({
                                    error:
                                      "Failed to generate reports.",
                                  });
                                }

                                db.query(
                                  queries.rejectedOffers,
                                  (err, rejectedResults) => {
                                    if (err) {
                                      console.error(
                                        "Admin reports rejected offers error:",
                                        err.message
                                      );

                                      return res.status(500).json({
                                        error:
                                          "Failed to generate reports.",
                                      });
                                    }

                                    db.query(
                                      queries.priceRecords,
                                      (err, priceResults) => {
                                        if (err) {
                                          console.error(
                                            "Admin reports price records error:",
                                            err.message
                                          );

                                          return res.status(500).json({
                                            error:
                                              "Failed to generate reports.",
                                          });
                                        }

                                        return res.json({
                                          farmers:
                                            farmerResults[0].total,

                                          buyers:
                                            buyerResults[0].total,

                                          crops:
                                            cropResults[0].total,

                                          markets:
                                            marketResults[0].total,

                                          offers:
                                            offerResults[0].total,

                                          pendingOffers:
                                            pendingResults[0].total,

                                          acceptedOffers:
                                            acceptedResults[0].total,

                                          rejectedOffers:
                                            rejectedResults[0].total,

                                          priceRecords:
                                            priceResults[0].total,
                                        });
                                      }
                                    );
                                  }
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);

// =========================================================
// START SERVER
// =========================================================

app.listen(
  PORT,
  "0.0.0.0",
  () => {
    console.log(
      `AgriOrbit Backend running on http://localhost:${PORT}`
    );
  }
);