import React from "react";
import "./PlanHead.css";
import hululogo from "../../../assets/img/hulu-logo.svg";
import bundles from "../../../assets/img/bundles-dark.svg";

function PlanHead() {
  return (
    <div class="plan-head-container">
      <div className="plan-head-column">
        <div className="bundle-header">
          <div className="left-headline">
            <div className="left-top-headline">
              <span className="headline-text">BASE PLANS</span>
            </div>
            <div className="left-bottom-headline">
              <img src={hululogo} role="presentation" alt="hulu-logo" />
            </div>
          </div>
          <div className="toggle-container">
            <div className="toggle-switch">
              <input
                className="toggle-checkbox"
                id="toggle-switch"
                type="checkbox"
              />
              <label className="toggle-label" htmlFor="toggle-switch">
                <span className="toggle-button"></span>
              </label>
            </div>
          </div>
          <div className="right-headline">
            <div className="right-top-headline">
              <span className="headline-text">BUNDLE / SAVE</span>
            </div>
            <div className="right-bottom-headline">
              <img src={bundles} role="presentation" alt="logos" />
            </div>
          </div>
        </div>
      </div>
      <div className="plan-head__card">
      <div className="plan-head__card-content">
        <div className="plan-head__card-badge">
          <span className="most-span">MOST POPULAR</span>
        </div>
        <div className="plan-head__card-eyebrow">
          <span className="trial-text">30 DAY FREE TRIAL</span>
        </div>
        <div className="plan-head__card-title">
          <span className="with-ads">Hulu (With Ads)</span>
        </div>
        <div className="plan-card__button-wrapper">
          <button className="button--cta plan-card__cta plan-card__0_cta smooth-transition css-ep6pbm" aria-label="Get Hulu (With Ads) plan">
            <span className="price-btn">$7.99 / MONTH</span>
          </button>
        </div>
        <div className="plan-card__button-wrapper--mobile">
          <button className="button--cta plan-card__cta plan-card__0_cta smooth-transition css-ep6pbm" aria-label="Get Hulu (With Ads) plan">
            <span className="css-1hdv16d">$7.99/mo.</span>
          </button>
        </div>
      </div>
    </div>
    <div className="plan-head__card2 ">
      <div className="plan-head__card-content">
        <div className="plan-head__card-badges">
          <span className="most-span">       </span>
        </div>
        <div className="plan-head__card-eyebrow">
          <span className="trial-text">30 DAY FREE TRIAL</span>
        </div>
        <div className="plan-head__card-title">
          <span className="with-ads">Hulu (With Ads)</span>
        </div>
        <div className="plan-card__button-wrapper">
          <button className="button--cta plan-card__cta plan-card__0_cta smooth-transition css-ep6pbm" aria-label="Get Hulu (With Ads) plan">
            <span className="price-btn">$7.99 / MONTH</span>
          </button>
        </div>
        <div className="plan-card__button-wrapper--mobile">
          <button className="button--cta plan-card__cta plan-card__0_cta smooth-transition css-ep6pbm" aria-label="Get Hulu (With Ads) plan">
            <span className="css-1hdv16d">$7.99/mo.</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PlanHead;
