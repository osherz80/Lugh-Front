import React from "react";
import { Document, Page, Text, View, StyleSheet, Link, Svg, Path } from "@react-pdf/renderer";
import { CV } from "@/store/types/cv";
import { FullSmartProfile } from "@/store/types/smartProfile";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// Create custom PDF styles conforming to high design standards
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#334155",
    lineHeight: 1.6,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#026b5d", // Brand primary color
    paddingBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: "#026b5d",
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 9,
    color: "#64748b",
    alignItems: "center",
  },
  contactItem: {
    marginRight: 15,
    textDecoration: "none",
  },
  linkedinPill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eff6ff",
    borderWidth: 0.5,
    borderColor: "#bfdbfe",
    borderRadius: 4,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 15,
    textDecoration: "none",
  },
  linkedinIcon: {
    width: 9,
    height: 9,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0f172a",
    borderBottomWidth: 1,
    borderBottomColor: "#cbd5e1",
    paddingBottom: 4,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  text: {
    fontSize: 9.5,
    color: "#334155",
  },
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  companyRole: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1e293b",
  },
  dateRange: {
    fontSize: 8.5,
    color: "#64748b",
  },
  descText: {
    fontSize: 9,
    color: "#475569",
    marginTop: 2,
  },
  tableRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 5,
  },
  tableColumn: {
    flexDirection: "column",
    flex: 1,
    borderWidth: 0.5,
    borderColor: "#cbd5e1",
    borderRadius: 4,
    overflow: "hidden",
  },
  columnHeader: {
    backgroundColor: "#f8fafc",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 8.5,
    fontWeight: "bold",
    color: "#0f172a",
    borderBottomWidth: 0.5,
    borderBottomColor: "#cbd5e1",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  columnCell: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 8,
    color: "#334155",
    borderBottomWidth: 0.5,
    borderBottomColor: "#f1f5f9",
    textAlign: "center",
  },
});

interface CVDocumentProps {
  profile: FullSmartProfile;
  cv: CV;
}

export function CVDocument({ profile, cv }: CVDocumentProps) {
  const { basics, contact, persona, experience, education } = profile;
  const { structuredSkills } = cv;

  // Derive display values from profile with fallbacks from cv or default placeholders
  const fullName = basics?.fullName || "Candidate Name";
  const targetRole = basics?.targetRole || cv?.roleTag || "Software Professional";
  const email = contact?.email || "";
  const phone = contact?.phone || "";
  const linkedin = contact?.linkedin || "";
  const portfolio = contact?.portfolio || "";

  // Use the persona story as professional summary, fall back to cv.content if story is empty
  const summary = cv?.summary || persona?.story || "";

  return (
    <Document title={`${fullName} - Resume`}>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.role}>{targetRole}</Text>
          <View style={styles.contactRow}>
            {email ? <Text style={styles.contactItem}>Email: {email}</Text> : null}
            {phone ? <Text style={styles.contactItem}>Phone: {phone}</Text> : null}
          </View>
          <View style={styles.contactRow}>
            {linkedin ? (
              <Link src={linkedin} style={styles.linkedinPill}>
                <Svg viewBox={`0 0 ${faLinkedinIn.icon[0]} ${faLinkedinIn.icon[1]}`} style={styles.linkedinIcon}>
                  <Path d={faLinkedinIn.icon[4] as string} fill="#0077B5" />
                </Svg>
              </Link>
            ) : null}
            {portfolio ? <Link src={portfolio} style={styles.contactItem}>Portfolio</Link> : null}
          </View>
        </View>

        {/* Summary Section */}
        {summary ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.text}>{summary}</Text>
          </View>
        ) : null}

        {/* Experience Section */}
        {experience && experience.length > 0 ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {experience.map((exp, index) => (
              <View key={exp.id || index} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.companyRole}>
                    {exp.roleTag} at {exp.company}
                  </Text>
                  <Text style={styles.dateRange}>
                    {exp.startDate} - {exp.isCurrent ? "Present" : exp.endDate}
                  </Text>
                </View>
                <Text style={styles.descText}>{exp.description}</Text>
              </View>
            ))}
          </View>
        ) : null}

        {structuredSkills && structuredSkills.length > 0 ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.tableRow}>
              {structuredSkills.map((skillItem, index) => (
                <View key={index} style={styles.tableColumn}>
                  <Text style={styles.columnHeader}>{skillItem.category}</Text>
                  {skillItem.skills.map((skill, sIdx) => (
                    <Text
                      key={sIdx}
                      style={[
                        styles.columnCell,
                        sIdx === skillItem.skills.length - 1 ? { borderBottomWidth: 0 } : {},
                      ]}
                    >
                      {skill}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        ) : null}

        {/* Education Section */}
        {education && education.length > 0 ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.companyRole}>
                    {edu.degree} - {edu.institution}
                  </Text>
                  <Text style={styles.dateRange}>
                    {edu.startDate} - {edu.isOngoing ? "Present" : edu.endDate}
                  </Text>
                </View>
                {edu.description ? <Text style={styles.descText}>{edu.description}</Text> : null}
              </View>
            ))}
          </View>
        ) : null}
      </Page>
    </Document>
  );
}
