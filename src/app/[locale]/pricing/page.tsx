import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/blocks/header";
import { Footer } from "@/blocks/footer";
import { Pricing } from "@/blocks/pricing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "landing.pricing" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
