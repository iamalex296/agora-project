import React from "react";

import Container from "../../UI/atoms/Container/Container";
import AmountCard from "../../UI/molecules/Cards/AmountCard/AmountCard";
import LiveOfferingsCard from "../../UI/molecules/Cards/LiveOfferingsCard/LiveOfferingsCard";
import PortfolioCard from "../../UI/molecules/Cards/PortfolioCard/PortfolioCard";
import SummaryCard from "../../UI/molecules/Cards/SummeryCard/SummeryCard";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <Container containerClassName="dashboard-container">
      <div className="dashboard-container__statistic-information">
        <div className="dashboard-container__statistic-information_amounts">
          <AmountCard amount="29,0312" description="Total investments" />
          <AmountCard amount="29,0312" description="Total investments" />
          <AmountCard amount="29,0312" description="Total investments" />
          <AmountCard amount="29,0312" description="Total investments" />
        </div>
        <SummaryCard
          amount="29,0312$"
          description="Distributed/contributed"
          percentage="80"
        />
        <PortfolioCard percent={64} />
        <PortfolioCard percent={87} />

        <div className="dashboard-container__statistic-information__investments">
          ferfer ef efdedw wed ew dwed wed wd wd wd wd wd wedwe dwedwejdn
          wnfuiwjenfuiniufn eiufniuernf uienfiu neiufn eiurf erf efer fer ferfer
          ferfer ef efdedw wed ew dwed wed wd wd wd wd wd wedwe dwedwejdn
          wnfuiwjenfuiniufn eiufniuernf uienfiu neiufn eiurf erf efer fer ferfer
          ferfer ef efdedw wed ew dwed wed wd wd wd wd wd wedwe dwedwejdn
          wnfuiwjenfuiniufn eiufniuernf uienfiu neiufn eiurf erf efer fer ferfer
          eiufniuernf uienfiu neiufn eiurf erf efer fer ferfer ferfer ef efdedw
          wed ew dwed wed wd wd wd wd wd wedwe dwedwejdn wnfuiwjenfuiniufn
          eiufniuernf uienfiu neiufn eiurf erf efer fer ferfer ferfer ef efdedw
          wed ew dwed wed wd wd wd wd wd wedwe dwedwejdn eiufniuernf uienfiu
          neiufn eiurf erf efer fer ferfer ferfer ef efdedw wed ew dwed wed wd
          wd wd wd wd wedwe dwedwejdn wnfuiwjenfuiniufn eiufniuernf uienfiu
          neiufn eiurf erf efer fer ferfer ferfer ef efdedw wed ew dwed wed wd
          wd wd wd wd wedwe dwedwejdn
        </div>
      </div>

      <div className="dashboard-container__offering-updates">
        <LiveOfferingsCard />
        <LiveOfferingsCard />
      </div>
    </Container>
  );
};

export default Dashboard;
