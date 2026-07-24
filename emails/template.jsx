import { Html, Head, Body, Preview, Heading, Text, Section, Container } from "react-email";
import * as React from "react";

export default function EmailTemplate({
    userName = "",
    type = "monthly-report",
    data = {},
}) {

    if (type == "monthly-report") {
        return (
            <Html>
                <Head />
                <Preview>Your Monthly Financial Report</Preview>
                <Body style={styles.body}>
                    <Container style={styles.container}>
                        <Heading style={styles.title}>Monthly Financial Report</Heading>

                        <Text style={styles.text}>Hello {userName},</Text>
                        <Text style={styles.text}>
                            Here&rsquo;s your financial summary for {data?.month}:
                        </Text>

                        {/* Main Stats */}
                        <Section style={styles.statsContainer}>
                            <div style={styles.stat}>
                                <Text style={styles.text}>Total Income</Text>
                                <Text style={styles.heading}>
                                    ${(data?.stats?.totalIncome ?? 0).toFixed(2)}
                                </Text>
                            </div>
                            <div style={styles.stat}>
                                <Text style={styles.text}>Total Expenses</Text>
                                <Text style={styles.heading}>
                                    ${(data?.stats?.totalExpenses ?? 0).toFixed(2)}
                                </Text>
                            </div>
                            <div style={styles.stat}>
                                <Text style={styles.text}>Net</Text>
                                <Text style={styles.heading}>
                                    ${((data?.stats?.totalIncome ?? 0) - (data?.stats?.totalExpenses ?? 0)).toFixed(2)}
                                </Text>
                            </div>
                        </Section>

                        {/* Category Breakdown */}
                        {data?.stats?.byCategory && (
                            <Section style={styles.section}>
                                <Heading style={styles.heading}>Expenses by Category</Heading>
                                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                    <tbody>
                                        {Object.entries(data.stats.byCategory).map(
                                            ([category, amount]) => (
                                                <tr key={category}>
                                                    <td style={styles.rowCellLeft}>{category}</td>
                                                    <td style={styles.rowCellRight}>
                                                        ${Number(amount ?? 0).toFixed(2)}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </Section>
                        )}

                        {/* AI Insights */}
                        {data?.insights && (
                            <Section style={styles.section}>
                                <Heading style={styles.heading}>FinTrack Insights</Heading>
                                {data.insights.map((insight, index) => (
                                    <Text key={index} style={styles.text}>
                                        • {insight}
                                    </Text>
                                ))}
                            </Section>
                        )}
                        <Text style={styles.footer}>
                            Thank you for using FinTrack. Keep tracking your finances for better
                            financial health!
                        </Text>
                    </Container>
                </Body>
            </Html>
        )
    }

    if (type == "budget-alert") {
        return (
            <Html>
                <Head />
                <Preview>Budget Alert</Preview>
                <Body style={styles.body}>
                    <Container style={styles.container}>
                        <Heading style={styles.title}>Budget Alert</Heading>
                        <Text style={styles.mainText}>Hello {userName},</Text>
                        <Text style={styles.mainText}>
                            You&rsquo;ve used {(data?.percentageUsed ?? 0).toFixed(1)}% of your
                            monthly budget.
                        </Text>
                        <Section style={styles.statsContainer}>
                            <div style={styles.stat}>
                                <Text style={styles.text}>Budget Amount</Text>
                                <Text style={styles.heading}>
                                    ${(data?.budgetAmount ?? 0).toFixed(2)}
                                </Text>
                            </div>
                            <div style={styles.stat}>
                                <Text style={styles.text}>Spent So Far</Text>
                                <Text style={styles.heading}>
                                    ${(data?.totalExpenses ?? 0).toFixed(2)}
                                </Text>
                            </div>
                            <div style={styles.stat}>
                                <Text style={styles.text}>Remaining</Text>
                                <Text style={styles.heading}>
                                    ${((data?.budgetAmount ?? 0) - (data?.totalExpenses ?? 0)).toFixed(2)}
                                </Text>
                            </div>
                        </Section>
                    </Container>
                </Body>
            </Html>
        );
    }
}

const styles = {
    body: {
        backgroundColor: "#f6f9fc",
        fontFamily: "-apple-system, sans-serif",
    },
    container: {
        backgroundColor: "#ffffff",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "32px",
        fontWeight: "bold",
        margin: "0 0 20px",
        textAlign: "center",
        color: "#1f2937",
    },
    heading: {
        fontSize: "20px",
        fontWeight: "600",
        color: "#1f2937",
        margin: "0 0 16px",
    },
    text: {
        fontSize: "16px",
        color: "#4b5563",
        margin: "0 0 16px",
    },
    statsContainer: {
        margin: "32px 0",
        padding: "20px",
        backgroundColor: "#f9fafb",
        borderRadius: "5px",
    },
    stat: {
        marginBottom: "16px",
        padding: "12px",
        backgroundColor: "#fff",
        borderRadius: "4px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    },
    mainText: {
        fontSize: "16px",
        color: "#4b5563",
        margin: "0 0 10px",
        marginLeft: "16px",
    },
    section: {
        marginTop: "32px",
        padding: "20px",
        backgroundColor: "#f9fafb",
        borderRadius: "5px",
        border: "1px solid #e5e7eb",
    },
    rowCellLeft: {
        padding: "12px 0",
        borderBottom: "1px solid #e5e7eb",
        textAlign: "left",
        fontSize: "16px",
        color: "#4b5563",
    },
    rowCellRight: {
        padding: "12px 0",
        borderBottom: "1px solid #e5e7eb",
        textAlign: "right",
        fontSize: "16px",
        color: "#4b5563",
        fontWeight: "600",
    },
    footer: {
        color: "#6b7280",
        fontSize: "14px",
        textAlign: "center",
        marginTop: "32px",
        paddingTop: "16px",
        borderTop: "1px solid #e5e7eb",
    },
};