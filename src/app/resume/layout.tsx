import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume & Work History",
  description:
    "View Mayowa Obisesan's professional resume, work history, skills, and experience as a full-stack developer.",
  openGraph: {
    title: "Resume | Mayowa Obisesan",
    description:
      "View Mayowa Obisesan's professional resume, work history, skills, and experience as a full-stack developer.",
    type: "profile",
    images: ["/images/my_profile_picture_blurred.jpg"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
