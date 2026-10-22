# Median Point Article Generation Protocol v1

This document defines the reusable internal workflow for generating Median Point article packages from research material.

It is designed for semi-automated editorial use. The system should help plan, structure, draft, and package an article, but it should not bypass evidence review or final editorial judgment.

## 1. Objective

Take a user-supplied research package and return a consistent article package containing:

1. `Chosen template`
2. `Why the template fits`
3. `Refined editorial question`
4. `Planning dossier`
5. `Narrative blueprint`
6. `CMS blueprint`
7. `Draft article`
8. `FAQ and references`
9. `Frontmatter recommendation`
10. `QA notes`

The system must not jump directly from raw input to prose draft.

## 2. Operating Principle

The workflow is:

`input -> classification -> planning -> CMS planning -> drafting -> QA -> publication package`

This sequence reflects the Median Point editorial manuals:

- evidence before opinion
- explanation before judgment
- visuals as editorial tools, not decoration
- transparent uncertainty where evidence is incomplete

## 3. Supported Templates

The protocol supports five primary article types.

### `Strategic Affairs Analysis`

Use when the article is about actors, incentives, geography, power, constraints, and future scenarios.

### `Synthesized Opinion`

Use when the article compares competing explanations and arrives at a reasoned editorial position.

### `Explainer`

Use when the article teaches a concept, institution, process, system, or policy.

### `Investigation`

Use when the article reconstructs what happened using evidence, chronology, and claim discipline.

### `Data Story`

Use when numbers are the main evidence and the article must interpret a measurable pattern.

## 4. Required Input

Every article run should begin with the request structure defined in [ARTICLE_REQUEST_TEMPLATE.md](</D:/IDE - My sites/Median Point IDE/ARTICLE_REQUEST_TEMPLATE.md>).

At minimum, the system should seek:

- `Working title`
- `Core question`
- `Topic summary`
- `Research material`
- `Must include`
- `Must avoid`
- `Desired output level`

## 5. Classification Step

Before any drafting begins, classify the request into one template.

### Selection Logic

- if the main job is teaching a concept -> `Explainer`
- if the main job is comparing rival explanations -> `Synthesized Opinion`
- if the main job is analyzing actors, incentives, and future scenarios -> `Strategic Affairs Analysis`
- if the main job is reconstructing evidence and chronology -> `Investigation`
- if the main job is interpreting numerical patterns -> `Data Story`

### Classification Output

Always return:

- `Chosen template`
- `Why it fits`
- `Why likely alternatives were not chosen`

If the article appears to span two formats, choose the dominant one and note the secondary influence.

## 6. Planning Dossier

Once the template is selected, produce a planning dossier before writing.

### `Strategic Affairs Analysis`

Produce:

- actor matrix
- chronology
- incentive map
- constraint map
- scenario sketch

### `Synthesized Opinion`

Produce:

- theory map
- evidence audit
- counterargument map
- conclusion pressure test

### `Explainer`

Produce:

- concept map
- reader confusion map
- mechanism map
- examples list

### `Investigation`

Produce:

- evidence register
- claim classification map
- master timeline
- unresolved questions list

### `Data Story`

Produce:

- data map
- pattern summary
- method limits summary
- interpretation boundaries

## 7. Narrative Blueprint

After planning, generate the section structure.

Each section must answer a clear question. Each paragraph must serve one primary purpose.

### Standard Blueprint Rules

- open by framing the real editorial question
- order sections to maximize understanding
- assign evidence to the correct section
- separate context from analysis
- separate analysis from conclusion
- keep uncertainty visible where relevant

### Default Narrative Shapes

#### `Strategic Affairs Analysis`

1. The question
2. Why it matters now
3. Historical context
4. Key actors
5. Incentives
6. Constraints
7. Current balance
8. Scenarios
9. Conclusion

#### `Synthesized Opinion`

1. The question
2. Why the debate exists
3. Theory A
4. Theory B
5. Theory C if needed
6. Evidence audit
7. Median Point position
8. Counterarguments
9. Conclusion

#### `Explainer`

1. The question
2. Definition
3. Background
4. How it works
5. Why it matters
6. Examples
7. Common misunderstandings
8. Conclusion

#### `Investigation`

1. The question
2. Why it matters
3. What is established
4. Timeline
5. The evidence
6. What can be inferred
7. What remains unproven
8. Counter-explanations
9. Conclusion

#### `Data Story`

1. The question
2. Key finding
3. What the numbers measure
4. Comparative or historical context
5. What explains the pattern
6. What the numbers do not prove
7. Why it matters
8. Conclusion

## 8. CMS Blueprint

After the narrative blueprint, plan the Keystatic component strategy.

The repo already supports these major editorial blocks through [keystatic.config.ts](</D:/IDE - My sites/Median Point IDE/keystatic.config.ts>):

- `Topline`
- `HistoricalContext`
- `Timeline`
- `ComparisonTable`
- `MapEmbed`
- `StatisticsGrid`
- `PullQuote`
- `FAQ`
- `References`
- `InfoBox`
- `SideNote`
- `ImageCaption`
- `BeforeAfterSlider`
- `Gallery`
- `Carousel`
- `RelatedReading`
- `CustomHTML`
- social embeds such as `YouTube`, `Tweet`, `Instagram`, and `Facebook`

### CMS Rule

Every suggested block must perform a clear editorial job:

- summarize
- compare
- sequence
- locate
- define
- clarify
- surface evidence
- reduce fatigue
- answer likely reader questions

Do not recommend blocks for decoration alone.

### Common Placement Logic

- `Topline` near the beginning for dense or long pieces
- `HistoricalContext` where background becomes necessary
- `ComparisonTable` where side-by-side reasoning matters
- `MapEmbed` where geography shapes the argument
- `Timeline` where chronology shapes the argument
- `StatisticsGrid` where a few numbers carry real explanatory weight
- `PullQuote` after a dense analytical section
- `FAQ` near the end
- `References` at the end of serious analytical work

### Placeholder Logic

If a useful asset is missing, explicitly mark it as a placeholder instead of inventing it.

Examples:

- `Optional map placeholder: energy chokepoints in the Gulf`
- `Optional embed placeholder: official statement video`
- `Optional before/after placeholder: satellite imagery comparison`

## 9. Drafting Rules

Drafting begins only after:

- classification is complete
- planning dossier is complete
- narrative blueprint is complete
- CMS blueprint is complete

### Universal Writing Rules

- evidence before opinion
- explanation before judgment
- measured tone
- stable terminology
- archive-safe time references
- no unsupported certainty
- no rhetorical excess

### Tone

The default Median Point tone should be:

- analytical
- measured
- curious
- accessible
- confident without false certainty

## 10. Output Levels

The system should support four practical output modes.

### `Blueprint only`

Return:

- template choice
- refined question
- planning dossier
- narrative blueprint

### `Blueprint + CMS plan`

Return:

- everything in blueprint mode
- full CMS blueprint
- visual placeholders

### `Full draft`

Return:

- everything in blueprint + CMS mode
- full article draft

### `Full publication package`

Return:

- everything in full draft mode
- frontmatter recommendation
- FAQ draft
- references draft
- site-ready MDX structure guidance

## 11. Common Output Package

Unless the user requests a lower output level, the final delivery should be shaped like this:

```txt
ARTICLE PACKAGE

1. Chosen template
2. Why this template fits
3. Refined editorial question
4. Planning dossier
5. Narrative blueprint
6. CMS blueprint
7. Draft article
8. FAQ or support blocks
9. References draft
10. Frontmatter recommendation
11. Visual/embed placeholders
12. QA notes
```

## 12. Frontmatter Layer

For site-ready publishing, provide a frontmatter recommendation compatible with the current content collection in [src/content.config.ts](</D:/IDE - My sites/Median Point IDE/src/content.config.ts>) and [keystatic.config.ts](</D:/IDE - My sites/Median Point IDE/keystatic.config.ts>).

Expected fields:

- `title`
- `description`
- `pubDate`
- `author`
- `category`
- `tags`
- `headingColor`
- `seoTitle` if needed
- `seoDescription` if needed
- `coverImage` suggestion if relevant

## 13. MDX Publish Shape

The final article should be designed for the content flow used in [src/content/blog](</D:/IDE - My sites/Median Point IDE/src/content/blog>).

Typical shape:

```mdx
---
title: ...
description: ...
pubDate: ...
author: Sudhanshu Verma
category: ...
tags:
  - ...
  - ...
headingColor: brand
---

<Topline>
...
</Topline>

Intro...

<HistoricalContext ...>
...
</HistoricalContext>

## Section

...

<ComparisonTable ... />

...

<FAQ ... />

<References ... />
```

## 14. QA Gate

Every article must pass two layers of QA.

### Universal QA

- Is the editorial question precise?
- Does every section have a purpose?
- Is the flow understandable to a smart non-specialist?
- Are time references archive-safe?
- Are visuals doing editorial work?
- Are references present?
- Is the tone aligned with Median Point?

### Template-Specific QA

#### `Strategic Affairs Analysis`

- Are actors, incentives, constraints, and scenarios explicit?

#### `Synthesized Opinion`

- Are rival explanations represented fairly?
- Is the final position earned through evidence?

#### `Explainer`

- Does the draft teach the concept step by step?
- Are likely misunderstandings resolved?

#### `Investigation`

- Are claims clearly distinguished as documented, inferred, or uncertain?
- Are limits and unknowns stated plainly?

#### `Data Story`

- Are method limits clear?
- Is correlation being mistaken for causation?

If the draft fails QA, revise the article before publication packaging.

## 15. Guardrails

The system must never:

- invent sources
- invent quotations
- invent statistics
- invent legal conclusions
- disguise uncertainty as fact
- recommend visuals only for aesthetic effect
- bypass final human editorial review on sensitive work

This protocol is semi-automated by design. It accelerates editorial production, but it does not replace judgment.

## 16. Recommended Usage

Use the request form in [ARTICLE_REQUEST_TEMPLATE.md](</D:/IDE - My sites/Median Point IDE/ARTICLE_REQUEST_TEMPLATE.md>) as the front door.

Then run this protocol in sequence:

1. classify the piece
2. build the planning dossier
3. build the narrative blueprint
4. build the CMS blueprint
5. draft the piece
6. run QA
7. assemble the publication package

That turns one research pack into a repeatable Median Point article workflow.
