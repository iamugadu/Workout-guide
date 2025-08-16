// src/App.js
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import "./index.css"; // since you said you don't have App.css

export default function App() {
  const { t, i18n } = useTranslation();

  // Keys for tabs (must match keys in i18n JSON)
  const tabKeys = ["full", "upper", "lower", "stretch"];
  const [activeTab, setActiveTab] = useState("full");

  // Get array of items for the active tab
  const items = t(`content.${activeTab}`, { returnObjects: true });

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <div className="logo" aria-hidden="true">💪</div>
          <div>
            <h1>{t("title")}</h1>
            <p className="subtitle">{t("subtitle")}</p>
          </div>
        </div>

        <div className="controls">
          <nav className="tabs" aria-label="Workout categories">
            {tabKeys.map((key) => (
              <button
                key={key}
                className={`tab ${activeTab === key ? "active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {t(`tabs.${key}`)}
              </button>
            ))}
          </nav>

          <label className="lang">
            <span>{t("language")}:</span>
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="fr">Français</option>
              <option value="zh">中文</option>
              <option value="hi">हिन्दी</option>
            </select>
          </label>
        </div>
      </header>

      <main className="content">
        <ul className="list">
          {items.map((text, idx) => (
            <li key={idx} className="item">
              {text}
            </li>
          ))}
        </ul>
      </main>

      <footer className="footer">
        <p>{t("footer")}</p>
      </footer>
    </div>
  );
}