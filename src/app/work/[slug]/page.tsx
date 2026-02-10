import { notFound, redirect } from "next/navigation";
import { caseStudies } from "@/content/case-studies";

export default function WorkSlugRedirect({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((cs) => cs.slug === params.slug);
  if (!study) notFound();

  // Canonical experience lives on the client subdomain.
  redirect(`https://${study.slug}.sitelytc.com`);
}

