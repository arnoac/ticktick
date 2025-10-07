from PIL import Image as PILImage
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.platypus import Image, Paragraph, SimpleDocTemplate, Spacer

# File name
pdf_filename = "TickTick_Litepaper_v1.1.pdf"

# Define document
doc = SimpleDocTemplate(
    pdf_filename,
    pagesize=A4,
    rightMargin=60,
    leftMargin=60,
    topMargin=80,
    bottomMargin=60,
)

# Colors
bg_color = colors.Color(0.043, 0.047, 0.063)  # #0B0C10
accent = colors.Color(0.639, 1, 0.071)  # #A3FF12
text_color = colors.whitesmoke

# Styles
styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="Header",
        fontName="Helvetica-Bold",
        fontSize=16,
        leading=22,
        textColor=accent,
        spaceAfter=10,
    )
)
styles.add(
    ParagraphStyle(
        name="Body",
        fontName="Helvetica",
        fontSize=11,
        leading=17,
        textColor=text_color,
        spaceAfter=12,
    )
)
styles.add(
    ParagraphStyle(
        name="CenterTitle",
        fontName="Helvetica-Bold",
        fontSize=20,
        alignment=TA_CENTER,
        textColor=accent,
        spaceAfter=14,
    )
)
styles.add(
    ParagraphStyle(
        name="SubTitle",
        fontName="Helvetica",
        fontSize=12,
        alignment=TA_CENTER,
        textColor=text_color,
        spaceAfter=20,
    )
)

# Story content
story = []

# Logo
try:
    img = PILImage.open("logo.png")
    img.thumbnail((150, 150))
    img.save("logo_resized.png")
    story.append(Image("logo_resized.png", width=120, height=120))
except Exception as e:
    print("⚠️ Could not load logo:", e)

story.append(Spacer(1, 20))
story.append(Paragraph("TickTick Litepaper (v1.1)", styles["CenterTitle"]))
story.append(
    Paragraph(
        "Fractional Access to Private Companies, Sports Teams, and Alternative Assets — On-Chain.",
        styles["SubTitle"],
    )
)
story.append(Spacer(1, 12))

# Sections
sections = [
    (
        "Abstract",
        """
TickTick is a sentiment-based speculative market protocol built on the Base network.
It enables users to trade their beliefs about the valuations of private companies,
sports franchises, and emerging ventures — without representing ownership or equity.
Each market reflects public sentiment and trading activity, creating a dynamic,
transparent measure of global interest.
""",
    ),
    (
        "The Market Problem",
        """
Traditional private equity is exclusive, opaque, and illiquid. Retail participants are
barred by high minimums, limited access, and outdated structures. Meanwhile, market
sentiment toward private companies remains untapped as a tradeable metric.
""",
    ),
    (
        "The TickTick Solution",
        """
TickTick introduces sentiment markets — tokenized digital representations of public
speculation on private company valuations. For example, a market like $SPACEX allows
users to trade based on perceived valuation growth or decline, using USDC as collateral.
These tokens represent sentiment, not securities, offering a transparent and fair way
to express belief in innovation.
""",
    ),
    (
        "The $TICK Token",
        """
The $TICK token governs the TickTick ecosystem. Holders can propose and vote on new
sentiment markets, stake for rewards, and receive fee discounts across the platform.
$TICK aligns community and protocol growth through decentralized governance.
""",
    ),
    (
        "Technical Architecture",
        """
Built on Coinbase’s Base network, TickTick leverages EVM-compatible smart contracts
and gas-relayer infrastructure to ensure smooth, low-fee transactions.
Users trade using USDC while the relayer absorbs network gas, providing a nearly
gas-free experience with full transparency on-chain.
""",
    ),
    (
        "Revenue Model",
        """
TickTick earns revenue from a small percentage of transaction fees, market creation
costs, and premium tiers. Additional revenue is generated from staking spreads and
treasury yield programs managed by governance.
""",
    ),
    (
        "Roadmap",
        """
Q2 2026 – Private Beta Launch
Q3 2026 – Public App + Sentiment Market Deployment
Q1 2027 – Sports Franchise Expansion
Q3 2027 – DAO Governance Launch & Treasury Incentives
""",
    ),
    (
        "Legal Compliance",
        """
TickTick operates as an offshore sentiment-based speculative protocol under digital
asset frameworks. Tokens do not represent equity, ownership, or debt in any entity.
All company names are used for identification under nominative fair use.
TickTick restricts participation from U.S. residents until full regulatory alignment.
""",
    ),
    (
        "Contact",
        """
Website: https://ticktick.org
Email: info@ticktick.org
X: https://x.com/TickTickOrg
Discord: https://discord.gg/DKYhdz8vEd
""",
    ),
    (
        "Legal Disclaimer",
        """
This litepaper is for informational purposes only and does not constitute financial
advice, solicitation, or an offer to sell securities. TickTick markets are speculative
digital environments for sentiment analysis and entertainment. Participation is at
the user’s own risk and subject to applicable laws in their jurisdiction.
""",
    ),
]

# Build content
for title, text in sections:
    story.append(Paragraph(title, styles["Header"]))
    story.append(Paragraph(text.strip(), styles["Body"]))
    story.append(Spacer(1, 12))


# ✅ Background function
def draw_background(canvas, doc):
    # fill background
    canvas.setFillColorRGB(0.043, 0.047, 0.063)
    canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)


# ✅ Build PDF with background
doc.build(story, onFirstPage=draw_background, onLaterPages=draw_background)

print(f"✅ Successfully generated {pdf_filename}")
