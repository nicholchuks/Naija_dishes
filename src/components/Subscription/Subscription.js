import React from "react";
import "../../components/Subscription/Subscription.css";
import PlanHead from "./FreeTrial/PlanHead";

const Subscription = () => {
  return (
    <>
      <section class="subscription">
        <div class="select-plan">
          <div class="text-x">Select Your Plan</div>
          <div class="sub-texts">
            No hidden fees, equipment rentals, or installation appointment.
            <br /> <b>Switch plans or cancel anytime</b>
          </div>
        </div>
        <PlanHead />
      </section>
    </>
  );
};

export default Subscription;
