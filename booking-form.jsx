import { useState } from "react";

const CATEGORIES = [
  {
    id: "unwell",
    icon: "❤️‍🩹",
    label: "Feeling unwell",
    description: "Vomiting, diarrhoea, breathing issues, urinary problems, or other symptoms",
    types: [
      "Digestive issue",
      "Respiratory Issue",
      "Urinary Problem",
      "Chronic condition & Treatment management",
    ],
  },
  {
    id: "skin-eyes-ears",
    icon: "🙀",
    label: "Skin, eyes or ears",
    description: "Itching, rashes, discharge, lumps, bumps, or growths",
    types: [
      "Skin Condition",
      "Eye Condition",
      "Ear Condition",
      "Lumps/Bumps/Growths",
    ],
  },
  {
    id: "mobility",
    icon: "🐾",
    label: "Mobility or pain",
    description: "Limping, stiffness, difficulty moving, or signs of pain",
    types: ["Mobility Concern"],
  },
  {
    id: "routine",
    icon: "💉",
    label: "Routine care",
    description: "Vaccinations, health checks, or preventative treatments",
    types: ["Vaccinations, Health Examination & Preventative Care"],
  },
  {
    id: "travel",
    icon: "✈️",
    label: "Travel certificates",
    description: "Health certificates or travel documentation",
    types: ["Travel Certification or Rabies Vaccine"],
  },
  {
    id: "endoflife",
    icon: "🕊️",
    label: "End-of-life care",
    description: "Compassionate guidance, pain management or saying goodbye peacefully",
    types: ["End-of-life & Compassionate Care"],
  },
  {
    id: "other",
    icon: "📋",
    label: "Something else",
    description: "Anything not listed above",
    types: ["Something else"],
  },
];

const SPECIES_OPTIONS = [
  { id: "dog", icon: "🐕", label: "Dog" },
  { id: "cat", icon: "🐈", label: "Cat" },
  { id: "rabbit", icon: "🐇", label: "Rabbit" },
  { id: "other", icon: "🐾", label: "Other" },
];

const TIME_PREFS = [
  { id: "morning", label: "Morning", sub: "8 am – 12 pm" },
  { id: "afternoon", label: "Afternoon", sub: "12 – 4 pm" },
  { id: "evening", label: "Evening", sub: "4 – 6 pm" },
  { id: "flexible", label: "I'm flexible", sub: "Any time works" },
];

// Simple progress bar
function ProgressBar({ step, total }) {
  return (
    <div style={{ display: "flex", gap: 6, marginBottom: 32 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: 4,
            borderRadius: 2,
            background: i <= step ? "#1a6b5a" : "#e2e8f0",
            transition: "background 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    category: null,
    appointmentType: null,
    species: null,
    otherSpecies: "",
    petName: "",
    ownerName: "",
    phone: "",
    email: "",
    date: "",
    timePref: null,
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (fields) => {
    setData((prev) => ({ ...prev, ...fields }));
    setErrors({});
  };

  const selectedCategory = CATEGORIES.find((c) => c.id === data.category);

  // ── Validation ──
  const validateStep = (s) => {
    const e = {};
    if (s === 0 && !data.category) e.category = true;
    if (s === 1 && selectedCategory?.types.length > 1 && !data.appointmentType)
      e.appointmentType = true;
    if (s === 2) {
      if (!data.species) e.species = true;
      if (data.species === "other" && !data.otherSpecies.trim()) e.otherSpecies = true;
      if (!data.petName.trim()) e.petName = true;
    }
    if (s === 3) {
      if (!data.ownerName.trim()) e.ownerName = true;
      if (!data.phone.trim()) e.phone = true;
      if (!data.email.trim()) e.email = true;
      else if (!/\S+@\S+\.\S+/.test(data.email)) e.email = true;
    }
    if (s === 4) {
      if (!data.date) e.date = true;
      if (!data.timePref) e.timePref = true;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) return;
    // Auto-select type if category has only one
    if (step === 0 && selectedCategory?.types.length === 1) {
      update({ appointmentType: selectedCategory.types[0] });
      setStep(2); // skip type selection
      return;
    }
    if (step === 1 && data.appointmentType) {
      setStep(2);
      return;
    }
    setStep((s) => s + 1);
  };

  const back = () => {
    setErrors({});
    if (step === 2 && selectedCategory?.types.length === 1) {
      setStep(0);
      return;
    }
    setStep((s) => s - 1);
  };

  // ── Styles ──
  const accent = "#1a6b5a";
  const accentLight = "#e8f5f1";
  const accentHover = "#15584a";
  const errorColor = "#dc2626";
  const bg = "#ffffff";
  const cardBorder = "#e2e8f0";

  const containerStyle = {
    maxWidth: 520,
    margin: "0 auto",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: "#1e293b",
    padding: "40px 24px",
  };

  const headingStyle = {
    fontSize: 22,
    fontWeight: 700,
    margin: "0 0 6px 0",
    color: "#0f172a",
  };

  const subStyle = {
    fontSize: 14,
    color: "#64748b",
    margin: "0 0 24px 0",
    lineHeight: 1.5,
  };

  const cardStyle = (selected, hasError) => ({
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "14px 16px",
    border: `2px solid ${selected ? accent : hasError ? errorColor : cardBorder}`,
    borderRadius: 12,
    cursor: "pointer",
    background: selected ? accentLight : bg,
    transition: "all 0.15s ease",
  });

  const btnPrimary = {
    width: "100%",
    padding: "14px 24px",
    fontSize: 16,
    fontWeight: 600,
    color: "#fff",
    background: accent,
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    transition: "background 0.15s",
  };

  const btnSecondary = {
    width: "100%",
    padding: "14px 24px",
    fontSize: 16,
    fontWeight: 500,
    color: "#64748b",
    background: "transparent",
    border: `1px solid ${cardBorder}`,
    borderRadius: 10,
    cursor: "pointer",
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    padding: "12px 14px",
    fontSize: 15,
    border: `1.5px solid ${hasError ? errorColor : "#d1d5db"}`,
    borderRadius: 10,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
    fontFamily: "inherit",
  });

  const labelStyle = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "#374151",
    marginBottom: 6,
  };

  const errorMsg = {
    fontSize: 12,
    color: errorColor,
    marginTop: 4,
  };

  // ── Confirmation ──
  if (submitted) {
    return (
      <div style={containerStyle}>
        <div
          style={{
            textAlign: "center",
            padding: "40px 0",
          }}
        >
          <div style={{ fontSize: 56, marginBottom: 16 }}>✓</div>
          <h2 style={{ ...headingStyle, fontSize: 24, marginBottom: 8 }}>
            Booking request sent!
          </h2>
          <p style={{ ...subStyle, marginBottom: 32, maxWidth: 360, marginLeft: "auto", marginRight: "auto" }}>
            We'll confirm your appointment by phone or email within a few hours.
            If it's urgent, give us a call.
          </p>
          <div
            style={{
              background: "#f8fafc",
              borderRadius: 12,
              padding: "20px 24px",
              textAlign: "left",
              marginBottom: 32,
            }}
          >
            <div style={{ fontSize: 13, color: "#64748b", marginBottom: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Summary
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {[
                ["Pet", `${data.petName} (${data.species === "other" ? data.otherSpecies : data.species})`],
                ["Reason", data.appointmentType],
                ["Preferred date", data.date],
                [
                  "Time",
                  TIME_PREFS.find((t) => t.id === data.timePref)?.label,
                ],
              ].map(([l, v]) => (
                <div
                  key={l}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 14,
                  }}
                >
                  <span style={{ color: "#64748b" }}>{l}</span>
                  <span style={{ fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            style={btnPrimary}
            onClick={() => {
              setSubmitted(false);
              setStep(0);
              setData({
                category: null,
                appointmentType: null,
                species: null,
                otherSpecies: "",
                petName: "",
                ownerName: "",
                phone: "",
                email: "",
                date: "",
                timePref: null,
                notes: "",
              });
            }}
          >
            Book another appointment
          </button>
        </div>
      </div>
    );
  }

  // ── Steps ──
  const totalSteps = 5;

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: accent, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
          Tony's Mobile Vets
        </div>
      </div>

      <ProgressBar step={step} total={totalSteps} />

      {/* Step 0: Category */}
      {step === 0 && (
        <div>
          <h2 style={headingStyle}>What's going on with your pet?</h2>
          <p style={subStyle}>
            Pick the option that best describes your situation — don't worry,
            you don't need to be exact.
          </p>
          <div style={{ display: "grid", gap: 10 }}>
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                style={cardStyle(data.category === cat.id, errors.category)}
                onClick={() => update({ category: cat.id, appointmentType: null })}
                role="button"
                tabIndex={0}
              >
                <span style={{ fontSize: 26, flexShrink: 0 }}>
                  {cat.icon}
                </span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>
                    {cat.label}
                  </div>
                  <div
                    style={{ fontSize: 13, color: "#64748b", lineHeight: 1.4, marginTop: 2 }}
                  >
                    {cat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {errors.category && (
            <div style={errorMsg}>Please select an option to continue</div>
          )}
          <div style={{ marginTop: 24 }}>
            <button style={btnPrimary} onClick={next}>
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 1: Specific type */}
      {step === 1 && selectedCategory && (
        <div>
          <h2 style={headingStyle}>Can you be more specific?</h2>
          <p style={subStyle}>This helps our vets prepare for the visit.</p>
          <div style={{ display: "grid", gap: 10 }}>
            {selectedCategory.types.map((type) => (
              <div
                key={type}
                style={cardStyle(
                  data.appointmentType === type,
                  errors.appointmentType
                )}
                onClick={() => update({ appointmentType: type })}
                role="button"
                tabIndex={0}
              >
                <div style={{ fontWeight: 500, fontSize: 15 }}>{type}</div>
              </div>
            ))}
          </div>
          {errors.appointmentType && (
            <div style={errorMsg}>Please select one</div>
          )}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginTop: 24,
            }}
          >
            <button style={btnSecondary} onClick={back}>
              Back
            </button>
            <button style={btnPrimary} onClick={next}>
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Pet info */}
      {step === 2 && (
        <div>
          <h2 style={headingStyle}>Tell us about your pet</h2>
          <p style={subStyle}>So we know who we're visiting!</p>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>What kind of pet?</label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 8,
              }}
            >
              {SPECIES_OPTIONS.map((s) => (
                <div
                  key={s.id}
                  onClick={() => update({ species: s.id })}
                  role="button"
                  tabIndex={0}
                  style={{
                    textAlign: "center",
                    padding: "14px 8px",
                    border: `2px solid ${data.species === s.id ? accent : errors.species ? errorColor : cardBorder}`,
                    borderRadius: 12,
                    cursor: "pointer",
                    background: data.species === s.id ? accentLight : bg,
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{ fontSize: 28 }}>{s.icon}</div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      marginTop: 4,
                      color: data.species === s.id ? accent : "#374151",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            {errors.species && (
              <div style={errorMsg}>Please select a species</div>
            )}
          </div>

          {data.species === "other" && (
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>What type of pet?</label>
              <input
                style={inputStyle(errors.otherSpecies)}
                placeholder="e.g. Guinea pig, bird, tortoise"
                value={data.otherSpecies}
                onChange={(e) => update({ otherSpecies: e.target.value })}
              />
              {errors.otherSpecies && (
                <div style={errorMsg}>Please tell us what kind of pet</div>
              )}
            </div>
          )}

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Pet's name</label>
            <input
              style={inputStyle(errors.petName)}
              placeholder="e.g. Bella"
              value={data.petName}
              onChange={(e) => update({ petName: e.target.value })}
            />
            {errors.petName && (
              <div style={errorMsg}>Please enter your pet's name</div>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginTop: 24,
            }}
          >
            <button style={btnSecondary} onClick={back}>
              Back
            </button>
            <button style={btnPrimary} onClick={next}>
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Owner info */}
      {step === 3 && (
        <div>
          <h2 style={headingStyle}>Your details</h2>
          <p style={subStyle}>
            We'll use this to confirm your booking.
          </p>

          <div style={{ display: "grid", gap: 16 }}>
            <div>
              <label style={labelStyle}>Your name</label>
              <input
                style={inputStyle(errors.ownerName)}
                placeholder="Full name"
                value={data.ownerName}
                onChange={(e) => update({ ownerName: e.target.value })}
              />
              {errors.ownerName && (
                <div style={errorMsg}>Please enter your name</div>
              )}
            </div>
            <div>
              <label style={labelStyle}>Phone number</label>
              <input
                style={inputStyle(errors.phone)}
                placeholder="07xxx xxx xxx"
                type="tel"
                value={data.phone}
                onChange={(e) => update({ phone: e.target.value })}
              />
              {errors.phone && (
                <div style={errorMsg}>Please enter a phone number</div>
              )}
            </div>
            <div>
              <label style={labelStyle}>Email address</label>
              <input
                style={inputStyle(errors.email)}
                placeholder="you@example.com"
                type="email"
                value={data.email}
                onChange={(e) => update({ email: e.target.value })}
              />
              {errors.email && (
                <div style={errorMsg}>Please enter a valid email</div>
              )}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginTop: 24,
            }}
          >
            <button style={btnSecondary} onClick={back}>
              Back
            </button>
            <button style={btnPrimary} onClick={next}>
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Date & Time */}
      {step === 4 && (
        <div>
          <h2 style={headingStyle}>When works for you?</h2>
          <p style={subStyle}>
            Pick a preferred date and time — we'll confirm availability.
          </p>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Preferred date</label>
            <input
              style={inputStyle(errors.date)}
              type="date"
              value={data.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => update({ date: e.target.value })}
            />
            {errors.date && (
              <div style={errorMsg}>Please pick a date</div>
            )}
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Preferred time</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {TIME_PREFS.map((t) => (
                <div
                  key={t.id}
                  onClick={() => update({ timePref: t.id })}
                  role="button"
                  tabIndex={0}
                  style={{
                    padding: "12px 14px",
                    border: `2px solid ${data.timePref === t.id ? accent : errors.timePref ? errorColor : cardBorder}`,
                    borderRadius: 10,
                    cursor: "pointer",
                    background: data.timePref === t.id ? accentLight : bg,
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.label}</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>
                    {t.sub}
                  </div>
                </div>
              ))}
            </div>
            {errors.timePref && (
              <div style={errorMsg}>Please select a time preference</div>
            )}
          </div>

          <div style={{ marginBottom: 8 }}>
            <label style={labelStyle}>
              Anything else we should know?{" "}
              <span style={{ fontWeight: 400, color: "#94a3b8" }}>
                Optional
              </span>
            </label>
            <textarea
              style={{
                ...inputStyle(false),
                minHeight: 80,
                resize: "vertical",
              }}
              placeholder="e.g. My dog is nervous around strangers, please approach slowly"
              value={data.notes}
              onChange={(e) => update({ notes: e.target.value })}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginTop: 24,
            }}
          >
            <button style={btnSecondary} onClick={back}>
              Back
            </button>
            <button
              style={btnPrimary}
              onClick={() => {
                if (validateStep(4)) setSubmitted(true);
              }}
            >
              Request appointment
            </button>
          </div>

          <p
            style={{
              fontSize: 12,
              color: "#94a3b8",
              textAlign: "center",
              marginTop: 16,
              lineHeight: 1.5,
            }}
          >
            This sends a request — we'll confirm by phone or email. No payment
            is taken now.
          </p>
        </div>
      )}
    </div>
  );
}