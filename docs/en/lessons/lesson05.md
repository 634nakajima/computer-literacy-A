# Lesson 5: Sensory Evaluation & Excel Basics — Measuring Font Impressions with the SD Method

## Goals for This Lesson

- Understand the SD (Semantic Differential) method for measuring impressions
- Rate six font samples using a Google Form questionnaire
- Learn basic Excel operations (input, functions, sorting)
- Enter and calculate your own data

---

::: info Instructor preparation
**Before class:**

**Stimulus materials (font samples)**
Prepare slides or printed materials showing the same word (e.g., "DESIGN" or "音楽") in 6 different fonts. Suggested fonts: Yu Mincho / Impact / HGP Sōei Kaku Pop-tai / HGP Gyōshotai / Century Gothic / Yu Gothic

**Google Form (questionnaire)**
Create a Google Form with 6 sections (one per font sample), each containing 7 bipolar scale items rated on a 1–5 scale. Share the link at the start of class.

**After class (preparation for Lesson 6)**
Export the Google Form responses to Google Sheets, calculate class averages for each sample × item combination, and share an Excel file at the start of the next lesson.
:::

---

## 1. What Is the SD Method?

### 1-1. Measuring Impressions with Numbers

Every day, we receive impressions from the things around us. Seeing a logo and thinking "that looks cool," or hearing music and feeling "that's warm" — these are sensations that are hard to put into words.

The **Semantic Differential (SD) Method** is a technique for **measuring these impressions and feelings as numerical data**. Developed by American psychologist Charles Osgood in 1957, it is widely used today in product design, UI/UX evaluation, marketing, architecture, and music research.

### 1-2. How the SD Method Works

The SD method uses **pairs of adjectives with opposite meanings (bipolar scales)**. For each stimulus (e.g., a font), you rate which end of each scale it leans toward.

**Example: Looking at a font**

```
Bright   [1] [2] [3] [4] [5]   Dark
Light    [1] [2] [3] [4] [5]   Heavy
Like     [1] [2] [3] [4] [5]   Dislike
```

- **1** = strongly matches the left adjective
- **2** = somewhat matches the left adjective
- **3** = neutral / neither
- **4** = somewhat matches the right adjective
- **5** = strongly matches the right adjective

### 1-3. Why This Matters for Art Students

In design, art, and entertainment, understanding how your work affects people — objectively — is essential. The SD method lets you go beyond "I like it" or "it doesn't feel right" and show **what specific aspects work and to what degree**, backed by data.

::: tip Where the SD method is used
- Measuring impression changes before/after product packaging redesigns
- Website and app design evaluation (UI/UX)
- Emotional response analysis for music and video content
- Environmental and interior design evaluation
- Brand logo image surveys
:::

---

## 2. Today's Evaluation Task

### 2-1. What You're Evaluating

Today you will evaluate **6 font samples (A–F)**. The same word ("デザイン" — "Design" in Japanese) is displayed in six very different fonts. Rate the impression each one gives you based on your immediate, instinctive reaction.

| | |
|:---:|:---:|
| ![Sample A](/images/lesson05/font-sample-a.png) | ![Sample B](/images/lesson05/font-sample-b.png) |
| ![Sample C](/images/lesson05/font-sample-c.png) | ![Sample D](/images/lesson05/font-sample-d.png) |
| ![Sample E](/images/lesson05/font-sample-e.png) | ![Sample F](/images/lesson05/font-sample-f.png) |

::: warning Important
- Rate your **immediate impression upon seeing the font** — not how readable it is
- Don't overthink it — go with your gut
- There are no right or wrong answers
:::

### 2-2. Rating Items (7 items, 5-point scale)

| # | Left adjective | ← 1 2 3 4 5 → | Right adjective |
|---|----------------|---------------|-----------------|
| 1 | Bright | | Dark |
| 2 | Light | | Heavy |
| 3 | Friendly | | Intimidating |
| 4 | Unique | | Ordinary |
| 5 | Refined | | Unsophisticated |
| 6 | Warm | | Cold |
| 7 | Like | | Dislike |

### 2-3. Fill in the Google Form

1. Open the Google Form link shared by the instructor (on screen or chat)
2. For each font sample (A–F), rate all 7 items on the 1–5 scale
3. Submit the form when done

The instructor will export all responses after class and prepare a class summary for Lesson 6.

---

## 3. Launch Excel

### 3-1. The Excel Interface

1. Open **Excel** from the desktop or Start menu
2. Click **"Blank workbook"** to create a new file

Excel's screen is a large grid of **cells** — the boxes where you enter data.

| Term | Description |
|------|-------------|
| **Cell** | One box in the grid where data is entered |
| **Column** | Vertical sequence, labeled A, B, C, … |
| **Row** | Horizontal sequence, labeled 1, 2, 3, … |
| **Cell address** | Column + row combination (e.g., B3 = column B, row 3) |
| **Formula bar** | Shows and edits the content of the selected cell |

### 3-2. Entering Data and Moving Between Cells

| Action | Method |
|--------|--------|
| Select a cell | Click |
| Confirm and move down | **Enter** key |
| Confirm and move right | **Tab** key |
| Cancel input | **Esc** key |
| Edit a cell | **F2** key or double-click |

---

## 4. Build Your Data Entry Sheet

### 4-1. Enter Header Row

Type the following into the specified cells:

| Cell | Content |
|------|---------|
| **A1** | (leave blank) |
| **B1** | Bright↔Dark |
| **C1** | Light↔Heavy |
| **D1** | Friendly↔Intimidating |
| **E1** | Unique↔Ordinary |
| **F1** | Refined↔Unsophisticated |
| **G1** | Warm↔Cold |
| **H1** | Like↔Dislike |
| **I1** | Average |

::: tip Adjusting column width
Double-click the boundary between two column headers (e.g., between A and B) to auto-fit the column to its content.
:::

### 4-2. Enter Sample Labels

| Cell | Content |
|------|---------|
| **A2** | Sample A |
| **A3** | Sample B |
| **A4** | Sample C |
| **A5** | Sample D |
| **A6** | Sample E |
| **A7** | Sample F |
| **A9** | Item average |

### 4-3. Enter Your Own Rating Data

Looking at your Google Form submission (or your memory of your answers), enter your ratings (1–5) into the corresponding cells.

- Enter data in the range **B2 to H7** (each sample × each item)

**Example (your data might look like this):**

| | Bright↔Dark | Light↔Heavy | Friendly | Unique | Refined | Warm | Like |
|--|-------------|-------------|----------|--------|---------|------|------|
| A | 2 | 2 | 2 | 3 | 4 | 2 | 1 |
| B | 3 | 4 | 4 | 2 | 2 | 4 | 4 |
| C | 1 | 1 | 1 | 2 | 5 | 1 | 2 |
| … | … | … | … | … | … | … | … |

::: warning Only enter values from 1 to 5
Values outside this range (e.g., 0 or 6) will distort your calculations.
:::

---

## 5. Calculate Basic Statistics

### 5-1. AVERAGE Function — Row Average per Sample

Click on **cell I2** and enter the following formula to calculate the average of all 7 ratings for Sample A:

```
=AVERAGE(B2:H2)
```

**Steps:**
1. Click **I2**
2. Type `=AVERAGE(B2:H2)`
3. Press **Enter** to confirm

**Copy to I3–I7 using AutoFill:**
1. Select **I2**
2. Hover over the small square in the bottom-right corner (the fill handle)
3. When the cursor becomes a **+**, drag down to **I7**

::: tip What is AutoFill?
AutoFill copies the formula to adjacent cells, automatically adjusting row numbers. I3 will contain `=AVERAGE(B3:H3)`, and so on.
:::

### 5-2. AVERAGE Function — Column Average per Item

In **cell B9**, calculate the average across all 6 samples for the "Bright↔Dark" item:

```
=AVERAGE(B2:B7)
```

Use AutoFill to fill **C9 through H9** with averages for each item.

### 5-3. MAX and MIN Functions

In **B11**, find the highest rating (most "dark") given to any sample:

```
=MAX(B2:B7)
```

In **B12**, find the lowest rating (most "bright"):

```
=MIN(B2:B7)
```

::: info Function syntax rules
- Always begin with **`=`** (equals sign)
- Function names are case-insensitive (Excel auto-capitalizes)
- Ranges are specified as **`StartCell:EndCell`**
:::

---

## 6. Sort Your Data

Sorting lets you immediately see which sample is rated highest (or lowest) on a given item.

### 6-1. Sort by "Like↔Dislike" Score

1. Select the data range (**A1 to I7**)
2. Go to **"Data" tab** → click **"Sort"**
3. Set "Column" to **H (Like↔Dislike)**
4. Set "Order" to **"Smallest to Largest"** (1 = Like appears at top)
5. Click **OK**

The samples now appear in order from most liked to least liked.

### 6-2. Undo the Sort

Press **Ctrl + Z** to undo, or sort by column A (ascending) to restore the A–F order.

---

## 7. Save Your File

1. Press **Ctrl + S** (or go to **"File" → "Save As"**)
2. File name: **`SD_Ratings_[StudentID]`** (e.g., `SD_Ratings_2024000`)
3. Location: class folder or OneDrive
4. Format: **Excel Workbook (.xlsx)**

---

## Submission

| # | Item | How to submit |
|---|------|---------------|
| 1 | Excel file with your own rating data | Submit as instructed in class |

::: warning Pre-submission checklist
- [ ] Is data entered in all cells B2–H7 (6 samples × 7 items)?
- [ ] Does the AVERAGE formula appear in column I (I2–I7)?
- [ ] Are item averages calculated in row 9 (B9–H9)?
- [ ] Does the file name include your student ID?
:::

---

## Summary

In this lesson, you learned:

1. **The SD Method** — a sensory evaluation technique that turns impressions into numbers with bipolar adjective pairs
2. **Excel basics** — cell input, rows and columns, saving
3. **AVERAGE, MAX, MIN functions** — fundamental data aggregation
4. **Sorting** — organizing data visually

Next lesson, we'll use the **class-wide dataset** to create charts and analyze our findings together.
