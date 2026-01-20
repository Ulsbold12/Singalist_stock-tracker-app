import TradingViewWidget from "@/components/TradingViewWidget";
import { Button } from "@/components/ui/button";
import { MARKET_DATA_WIDGET_CONFIG } from "@/lib/constants";

const Home = () => {
  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Market Overvire"
            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
            config={MARKET_DATA_WIDGET_CONFIG}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
