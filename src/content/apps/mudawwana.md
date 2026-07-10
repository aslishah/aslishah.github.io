---
title: The Mudawwana Text Reuse Explorer
description: A Power BI application for exploring text reuse between the Mudawwana of Saḥnūn (d. 240/855) and the OpenITI corpus.
order: 4
embed: "https://app.powerbi.com/view?r=eyJrIjoiMjcwNjBhMGEtM2U0Mi00ZmZjLTkwODQtYTk5M2YwZjk0ODM0IiwidCI6Ijk1ZjZmYjYyLWI1YzUtNDkwNC04NTZjLTJlYTNiNGNjZTA4MyJ9"
embedHeight: 640
tags: [text reuse, Maliki law, Power BI, OpenITI]
---

This app, built with Power BI, explores text reuse data between the
*Mudawwana* of Saḥnūn b. Saʿīd al-Qayrawānī (d. 240/855) and the
[OpenITI corpus](https://kitab-project.org/docs/openITI#1-what-is-openiti)
prepared by the KITAB project. Text reuse refers to shared passages between
the *Mudawwana* and other works in the corpus.

Saḥnūn was the most prominent Mālikī jurist of the Islamic West, who lived and
taught in Qayrawān; the study of the *Mudawwana* is central to our
understanding of the development of the Mālikī school of law. This data is
meant to complement studies of the manuscript tradition of the *Mudawwana* as
well as close textual analysis. Citation network analysis and patterns of
quotation are part of my future work in this direction.

### How to read the app

The app uses OpenITI URIs (Unique Resource Identifiers) to identify each book,
author, and version — for example,
`0240SahnunIbnSacid.MudawwanaKubra.Shamela0000587-ara1` combines the author
URI (death date + shuhra), book URI (short title), and version URI (repository
ID). See the KITAB project's
[documentation](https://kitab-project.org/docs/openITI#uris--cts-like-folder-structure)
for details, and the
[OpenITI corpus metadata](https://kitab-corpus-metadata.azurewebsites.net/) to
look up a book's URI.

- **Page 2** shows text reuse patterns across the *Mudawwana* (Book 1),
  divided into `milestones` — chunks of 300 tokens, roughly one printed page
  each, 3,147 in total along the x-axis. Coloured circles represent reuse,
  positioned on the y-axis by the number of reused words.
- **Page 3** lets you select a book and a milestone and read the reused
  passages side by side.
- **Pages 4–5** deal with unique milestones and are still under development.

*The template was originally developed by Sohail Merchant, who also introduced
me to Power BI.*
