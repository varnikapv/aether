import { Hero } from "@/components/hero";
import { Ticker } from "@/components/ticker";
import { Manifesto } from "@/components/manifesto";
import { Catalogue } from "@/components/catalogue";
import { Instruments } from "@/components/instruments";
import { Dispatch } from "@/components/dispatch";
import { Closing } from "@/components/closing";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="relative">
      <Hero />
      <Ticker />
      <Manifesto />
      <Catalogue />
      <Instruments />
      <Dispatch />
      <Closing />
      <Footer />
    </main>
  );
}
