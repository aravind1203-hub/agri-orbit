import { useState } from "react";

function Profile({
  onBackToDashboard,
  farmer,
}) {
  const [name, setName] = useState(
    farmer?.name || ""
  );

  const [mobile, setMobile] = useState(
    farmer?.mobile || ""
  );

  const [email, setEmail] = useState(
    farmer?.email || ""
  );

  const [district, setDistrict] = useState(
    farmer?.district || ""
  );

  const [village, setVillage] = useState(
    farmer?.village || ""
  );

  const [location, setLocation] = useState(
    farmer?.location || ""
  );

  const [crops, setCrops] = useState(
    farmer?.crops || ""
  );

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const farmerId =
    farmer?.farmer_id ||
    farmer?.id;

  const handleSave = async (e) => {
    e.preventDefault();

    setError("");

    if (
      !name.trim() ||
      !mobile.trim() ||
      !email.trim() ||
      !district.trim() ||
      !village.trim() ||
      !crops.trim()
    ) {
      setError(
        "Please fill all required fields."
      );
      return;
    }

    if (!farmerId) {
      setError(
        "Farmer information not found. Please login again."
      );
      return;
    }

    setSaving(true);

    try {
      const response = await fetch(
        `http://10.19.77.40:5000/api/farmers/${farmerId}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: name.trim(),
            mobile: mobile.trim(),
            email: email.trim(),
            district: district.trim(),
            village: village.trim(),
            location: location.trim(),
            crops: crops.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
          "Unable to update profile."
        );
      }

      alert(
        "Profile updated successfully!"
      );

    } catch (error) {

      console.error(
        "Profile update error:",
        error
      );

      setError(
        error.message ||
        "Unable to update profile."
      );

    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="profile-page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="profile-header">

        <div>
          <h1>AgriOrbit 🌱</h1>
          <p>Farmer Profile</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>


      {/* =========================
          PROFILE CONTENT
      ========================= */}

      <section className="profile-content">

        <div className="profile-card">

          {/* Profile Icon */}

          <div className="profile-avatar">
            👨‍🌾
          </div>

          <h2>My Profile</h2>

          <p className="profile-subtitle">
            View and update your farmer information
          </p>


          {/* Error */}

          {error && (
            <p
              style={{
                color: "#dc3545",
                fontSize: "13px",
                margin: "10px 0",
                textAlign: "left",
              }}
            >
              {error}
            </p>
          )}


          {/* =========================
              PROFILE FORM
          ========================= */}

          <form onSubmit={handleSave}>

            {/* Full Name */}

            <div className="profile-form-group">

              <label>
                👤 Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            </div>


            {/* Mobile Number */}

            <div className="profile-form-group">

              <label>
                📱 Mobile Number
              </label>

              <input
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value)
                }
              />

            </div>


            {/* Email */}

            <div className="profile-form-group">

              <label>
                📧 Email
              </label>

              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>


            {/* District */}

            <div className="profile-form-group">

              <label>
                📍 District
              </label>

              <input
                type="text"
                placeholder="Enter district"
                value={district}
                onChange={(e) =>
                  setDistrict(e.target.value)
                }
              />

            </div>


            {/* Village */}

            <div className="profile-form-group">

              <label>
                🏠 Village
              </label>

              <input
                type="text"
                placeholder="Enter village"
                value={village}
                onChange={(e) =>
                  setVillage(e.target.value)
                }
              />

            </div>


            {/* Location */}

            <div className="profile-form-group">

              <label>
                📌 Location
              </label>

              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
              />

            </div>


            {/* Crops Grown */}

            <div className="profile-form-group">

              <label>
                🌾 Crops Grown
              </label>

              <input
                type="text"
                placeholder="Example: Tomato, Onion, Potato"
                value={crops}
                onChange={(e) =>
                  setCrops(e.target.value)
                }
              />

            </div>


            {/* Save Button */}

            <button
              type="submit"
              className="save-profile-button"
              disabled={saving}
            >
              {saving
                ? "💾 Saving..."
                : "💾 Save Changes"}
            </button>

          </form>


          {/* Back Button */}

          <button
            type="button"
            className="back-dashboard-button"
            onClick={onBackToDashboard}
          >
            ← Back to Dashboard
          </button>

        </div>

      </section>

    </div>
  );
}

export default Profile;