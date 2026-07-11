import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";
import FinalCTA from "../components/FinalCTA";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: data.error || "Failed to submit form.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        submitting: false,
        success: false,
        error: "Network error. The backend server might not be running.",
      });
    }
  };

  return (
    <div>
      {/* Subpage Hero */}
      <section
        style={{
          background:
            'linear-gradient(rgba(11, 35, 65, 0.9), rgba(11, 35, 65, 0.95)), url("/images/Executives.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "6rem 0",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div className="container">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--accent)",
              fontWeight: "600",
              marginBottom: "1rem",
              display: "inline-block",
            }}
          >
            Trade Desk
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "3rem",
              fontWeight: "800",
              color: "#ffffff",
              maxWidth: "850px",
              margin: "0 auto",
              lineHeight: "1.2",
            }}
          >
            Let's Start A Conversation.
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            {/* Contact Details */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2.5rem",
              }}
            >
              <div>
                <span className="section-tag">Direct Lines</span>
                <h2
                  style={{
                    fontSize: "2rem",
                    color: "var(--primary)",
                    marginBottom: "1.5rem",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Get In Touch Directly
                </h2>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "1rem",
                    lineHeight: "1.7",
                  }}
                >
                  Whether you're looking for a sourcing partner, requesting
                  product specifications, or planning your next import, our team
                  is ready to assist you. Complete the inquiry sheet and our B2B
                  trade specialists will contact you within 24 hours.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "var(--section-bg)",
                      border: "1px solid var(--border)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--secondary)",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: "700",
                        color: "var(--primary)",
                        fontSize: "0.95rem",
                      }}
                    >
                      Sourcing Offices
                    </h4>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        marginTop: "0.2rem",
                      }}
                    >
                      Gujarat, India (Operating networks and farms nationwide)
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "var(--section-bg)",
                      border: "1px solid var(--border)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--secondary)",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: "700",
                        color: "var(--primary)",
                        fontSize: "0.95rem",
                      }}
                    >
                      B2B Trade Desk Phone
                    </h4>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        marginTop: "0.2rem",
                      }}
                    >
                      +91 95124 00083
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "var(--section-bg)",
                      border: "1px solid var(--border)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--secondary)",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: "700",
                        color: "var(--primary)",
                        fontSize: "0.95rem",
                      }}
                    >
                      Email Sourcing Inquiries
                    </h4>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        marginTop: "0.2rem",
                      }}
                    >
                      contact@crestwaveglobal.com
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "var(--section-bg)",
                      border: "1px solid var(--border)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--secondary)",
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: "700",
                        color: "var(--primary)",
                        fontSize: "0.95rem",
                      }}
                    >
                      Operating Hours
                    </h4>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        marginTop: "0.2rem",
                      }}
                    >
                      Mon - Sat: 9:00 AM - 6:30 PM (IST)
                      <br />
                      24/7 client response desk for international time zones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="card" style={{ backgroundColor: "#ffffff" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "var(--primary)",
                  marginBottom: "1.5rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: "700",
                }}
              >
                Submit Sourcing Sheet
              </h3>

              {status.success && (
                <div
                  style={{
                    backgroundColor: "#F0FDF4",
                    border: "1px solid #BBF7D0",
                    borderRadius: "0.5rem",
                    padding: "1.25rem",
                    display: "flex",
                    gap: "0.75rem",
                    color: "#166534",
                    marginBottom: "1.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  <CheckCircle2 size={20} style={{ flexShrink: 0 }} />
                  <div>
                    <h5 style={{ fontWeight: "700", color: "#166534" }}>
                      Inquiry Submitted Successfully
                    </h5>
                    <p style={{ marginTop: "0.25rem" }}>
                      Our global trade sourcing manager will contact you with
                      pricing updates shortly.
                    </p>
                  </div>
                </div>
              )}

              {status.error && (
                <div
                  style={{
                    backgroundColor: "#FEF2F2",
                    border: "1px solid #FCA5A5",
                    borderRadius: "0.5rem",
                    padding: "1.25rem",
                    display: "flex",
                    gap: "0.75rem",
                    color: "#991B1B",
                    marginBottom: "1.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  <AlertCircle size={20} style={{ flexShrink: 0 }} />
                  <div>
                    <h5 style={{ fontWeight: "700", color: "#991B1B" }}>
                      Submission Error
                    </h5>
                    <p style={{ marginTop: "0.25rem" }}>{status.error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div
                  className="grid-2"
                  style={{ gap: "1rem", marginBottom: 0 }}
                >
                  <div className="form-group">
                    <label className="form-label">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="e.g. buyer@company.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Include country code"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="e.g., Home Textiles Bulk Sourcing Quote"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Message / Sourcing Requirements *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    required
                    placeholder="Describe your dimensions, specifications, target quantities, and destination port."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "1rem" }}
                  disabled={status.submitting}
                >
                  {status.submitting
                    ? "Submitting Inquiry..."
                    : "Submit Sourcing Sheet"}{" "}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
