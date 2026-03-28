# Lesson 6: Excel Advanced — Charting and Analyzing SD Method Data

## Goals for This Lesson

- Use class-wide data to create charts
- Compare "preference" across 6 font samples using a bar chart
- Visualize impression profiles using a radar chart
- Interpret and discuss findings from the charts

---

::: info Instructor preparation
**At the start of class:**
Distribute the class summary Excel file (exported from Google Forms, with average ratings per sample × item). Share via OneDrive or classroom system.

**Suggested file structure:**
- Sheet 1: All individual responses (rows = students, columns = sample × item)
- Sheet 2: Class averages (rows = samples, columns = rating items) ← students mainly use this
:::

---

## 1. Review the Class Data

### 1-1. Open the Distributed File

Open the Excel file shared by the instructor (e.g., `Class_Summary.xlsx`).

Go to **Sheet 2 "Class Averages"** and verify the table looks something like this:

| | Bright↔Dark | Light↔Heavy | Friendly | Unique | Refined | Warm | Like |
|--|-------------|-------------|----------|--------|---------|------|------|
| Sample A | 2.1 | 2.4 | 1.9 | 3.2 | 3.8 | 2.3 | 1.8 |
| Sample B | 3.5 | 4.1 | 3.9 | 2.8 | 2.1 | 4.0 | 3.7 |
| Sample C | 1.4 | 1.7 | 1.5 | 3.1 | 4.2 | 1.6 | 1.9 |
| Sample D | 3.2 | 3.4 | 2.8 | 3.7 | 2.5 | 2.9 | 2.6 |
| Sample E | 2.8 | 2.9 | 3.2 | 2.4 | 1.9 | 3.1 | 2.8 |
| Sample F | 3.8 | 3.5 | 3.6 | 2.2 | 2.3 | 3.7 | 3.9 |

*(These are example values — use the actual class data.)*

### 1-2. Compare Your Ratings to the Class Average

Open your own file from last lesson alongside the class data (you can use two windows).

- Which samples did you rate similarly to the class?
- Where did your ratings differ most?

These individual differences are themselves a fascinating subject of research in the SD method.

---

## 2. Bar Chart — Comparing "Preference" Across Samples

### 2-1. Prepare a Chart Data Table

First, create a small table using only the **"Like↔Dislike"** column.

In an empty area of the class data sheet (e.g., starting at **column K**), enter:

| Cell | Content |
|------|---------|
| K1 | Font |
| L1 | Like↔Dislike (class average) |
| K2 | Sample A |
| K3 | Sample B |
| K4 | Sample C |
| K5 | Sample D |
| K6 | Sample E |
| K7 | Sample F |

In L2–L7, reference the "Like↔Dislike" column from the class averages table (e.g., enter `=G2` in L2, adjusting cell references to match your actual data layout).

### 2-2. Insert a Bar Chart

1. Select the range **K1 to L7**
2. Go to **"Insert" tab** → **"Charts" group** → **"Insert Column or Bar Chart"**
3. Select **"Clustered Column"**

The chart appears on the sheet.

### 2-3. Format the Chart

**Change the chart title:**
1. Double-click "Chart Title" at the top of the chart
2. Replace the text with **"Font Preference (Class Average)"**
3. Click outside the chart to confirm

**Add axis labels:**
1. Click the chart to select it
2. Click the **"+"** icon (Chart Elements) that appears in the top-right corner
3. Check **"Axis Titles"**
4. Edit the vertical axis label to read **"Rating (1=Like ↔ 5=Dislike)"**

::: tip Reading the chart
A **lower score** means the class liked that sample more (1 = Like). A shorter bar = more preferred font.
:::

**Change bar colors (optional):**
1. Click any bar to select the series
2. Right-click → **"Format Data Series"**
3. Under **"Fill"**, choose your preferred color

---

## 3. Radar Chart — Impression Profile

A bar chart is great for comparing one item across samples, but to see **all 7 items at once**, a radar chart (spider chart) is much more powerful.

### 3-1. Understanding Radar Charts

A radar chart places multiple axes radiating outward from a center, and connects the values on each axis to form a polygon.

- **Larger polygon** → overall higher ratings (leans toward right adjectives)
- **Smaller polygon** → overall lower ratings (leans toward left adjectives)
- **Irregular shape** → one or more items stand out strongly

### 3-2. Create a Radar Chart for One Sample

Let's visualize all 7 item ratings for **Sample A**.

**Select the data:**
1. In the class averages table, select the header row (B1–H1: "Bright↔Dark" … "Like↔Dislike")
2. Hold **Ctrl** and also select Sample A's row (B2–H2)

**Insert the chart:**
1. Go to **"Insert" tab** → click the small dropdown arrow near the chart options
2. Choose **"All Charts"** → **"Radar"** → **"Radar"** (without fill)
3. Click OK

### 3-3. Overlay Multiple Samples for Comparison

Select two or three samples with contrasting impressions and overlay them to see differences clearly.

**Add a data series:**
1. Right-click the chart → **"Select Data"**
2. Click **"Add"**
3. In "Series name," enter `Sample B`
4. In "Series values," select Sample B's row of ratings
5. Click OK → OK

::: tip Comparison tip
Try overlaying the most-liked sample with the least-liked one. Which specific items differ most? Does the shape of the impression profile explain why one is preferred?
:::

---

## 4. Compare Yourself to the Class

### 4-1. Create a Radar Chart from Your Own Data

Open your file from Lesson 5 and create a radar chart using your own ratings. Compare it side by side with the class average radar chart.

**Questions to consider:**
- Do you and the class agree on which sample feels "warm" or "cold"?
- Are there items where individual differences seem especially large?

### 4-2. Write Your Analysis in the Spreadsheet

Below your chart, write a short analysis in a cell. For example:

```
[Analysis]
- The most preferred sample for our class was Sample __, with an average of __.
- The biggest gap between my rating and the class average was for Sample __
  on the __ item (I rated it __, class average was __).
- From the radar chart, Sample __ has a strong "refined" impression,
  while Sample __ scores high on "friendly/warm."
```

---

## 5. Possibilities and Limitations of the SD Method

### 5-1. Where the SD Method Is Applied

| Field | Application |
|-------|-------------|
| **Product design** | Measuring impression before/after packaging redesign |
| **Graphic design** | Providing data-backed rationale for logo and font choices |
| **UI/UX design** | Evaluating usability and feel of websites and apps |
| **Music & film** | Analyzing emotions conveyed by sound or visuals |
| **Architecture & space** | Measuring comfort and impression of environments |
| **Marketing** | Brand image research and competitive analysis |

### 5-2. Things to Watch Out For

::: warning Limitations of the SD method
- Results vary by culture, age, gender, and experience of respondents
- The choice of adjective pairs strongly influences results (choosing appropriate pairs is difficult)
- Watch for the **central tendency bias** — respondents who always choose the middle (3)
- With too few respondents, statistical reliability is low
:::

Being aware of these limitations when interpreting data is a critical skill for any researcher or designer.

---

## Submission

| # | Item | Content | How to submit |
|---|------|---------|---------------|
| 1 | Analysis report (Excel file) | Bar chart + radar chart + written analysis | Submit as instructed in class |

::: warning Pre-submission checklist
- [ ] Does the bar chart have a **title and axis labels**?
- [ ] Does the radar chart show **at least 2 samples** overlaid?
- [ ] Is there a **written analysis** summarizing what you read from the charts?
- [ ] Does the file name include your student ID?
:::

---

## Summary

Across these two SD method lessons, you learned:

1. **SD method theory** — measuring impressions numerically using bipolar adjective pairs
2. **Data entry and aggregation** — AVERAGE, MAX, MIN functions
3. **Bar charts** — comparing numeric values across categories
4. **Radar charts** — visualizing multi-variable impression profiles at a glance
5. **Writing analysis** — extracting objective insights from charts and expressing them in your own words

> Sensory experience and aesthetic feeling, when expressed as data, become **shareable, comparable, and improvable**.
> This is the key perspective that connects art and design to the wider world.
