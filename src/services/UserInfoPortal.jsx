import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";

const UserInfoPortal = ({ user }) => {
  const [portalRoot, setPortalRoot] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    setPortalRoot(document.getElementById("portal-root"));

    const style = document.createElement("style");
    style.textContent = `
      @media (max-width: 768px) {
        .responsive-portal {
          top: 280px !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!user || !portalRoot) return null;

  return ReactDOM.createPortal(
    <div style={styles.wrapper}>
      <NavLink
        to="#"
        onClick={() => setShowInfo(!showInfo)}
        style={styles.toggleLink}
      >
        👤 Profile
      </NavLink>

      {showInfo && (
        <div className="responsive-portal" style={styles.portal}>
          <p>
            <strong>User Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}
    </div>,
    portalRoot
  );
};

const styles = {
  wrapper: {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 1050,
    textAlign: "right",
  },
  toggleLink: {
    backgroundColor: "#6c757d",
    color: "#fff",
    padding: "6px",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "14px",
    display: "inline-block",
  },
  portal: {
    position: "fixed",
    top: "165px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#333",
    color: "#fff",
    border: "1px solid #fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
    zIndex: 1001,
    minWidth: "260px",
    textAlign: "left",
  },
};

export default UserInfoPortal;
