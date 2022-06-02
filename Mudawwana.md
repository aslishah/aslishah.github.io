---
layout: page
title:  Mudawwana
permalink: /mudawwana
---
<iframe title="MudawwanaApp_dev" width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiOGIxNDU5ODgtMjY0ZC00NzY0LTk2ZjItODU2YjJjZmIyNGE4IiwidCI6Ijk1ZjZmYjYyLWI1YzUtNDkwNC04NTZjLTJlYTNiNGNjZTA4MyJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>

## About the Mudawwana App
The app is created with PowerBI for exploring and analysing text reuse data of the _Mudawwana_ of Saḥnūn b. Saʿīd (d. 856) and the OpenITI corpus prepared by KITAB. Text reuse refers to shared passages in the _Mudawwana_ and other works in  the [OpenITI corpus](http://kitab-project.org/docs/openITI#1-what-is-openiti). Saḥnūn was the most prominent Mālikī jurist of the Islamic West who lived and taught in Qayrawān, and the study of the Mudawwana is important for our understanding of the development of the Mālikī school of law. It is hoped that this data will complement studies of the manuscript tradition of the _Mudawwana_, as well as close textual analysis. Additional computational methods, such as citation networks analysis and patters of quotation, will also be part of my future work in this direction. 

### General info
The app uses Book URI (Unique Resource Identifier) and other terminology used by the creators of the OpenITI. These are used in order to give unique ID to each book, author, and version of the text in the corpus, such as **0240SahnunIbnSacid.MudawwanaKubra.Shamela0000587-ara1** where **Author URI** (date of death + shuhra of the author), **Book URI** (short title of the book), and **Version URI** (repository ID) are put together to create a unique ID for a digital version of the _Mudawwana_. The URI's main utility if for computational reading, but it is also useful for human readers. The OpenITI corpus includes separate metadata files, called YML files in the repositories, which provide all the available information about the books in the corpus. Knowing the structure of the OpenITI corpus and the URI is important for understanding text reuse data. The KITAB Project provides a comprehensive documentation which can be accessed [here](http://kitab-project.org/docs/openITI#uris--cts-like-folder-structure). To check a book's URI and whether it exists in the OpenITI corpus try [OpenITI corpus Metadata](https://kitab-corpus-metadata.azurewebsites.net/). You can download and search  the version of the _Mudawwana_ used here from [here](https://raw.githubusercontent.com/OpenITI/0250AH/master/data/0240SahnunIbnSacid/0240SahnunIbnSacid.MudawwanaKubra/0240SahnunIbnSacid.MudawwanaKubra.Shia000895Vols-ara1), especially to check  the milstones and sections.  Now more about this app. 

### Page 1

Page 1 gives a statistical overview, but it hasn't been customised yet, so better to skip it for now.

### Page 2

This page shows text reuse pattern across the _Mudawwana_ (referred to as B1 or Book 1) which is divided into `milestones`- chunks of 300 tokens/words. One milestones roughly equals to one printed page. Thus, the _Mudawwana_ is shown as 3147 milesones along the x-axis. The coloured circles represent text reuse, placed on the y-axis according to the number of reused words. If the entire milestone (i.e. 300 words) is reused from Book 2, then it is shown at 300 - the top of the y-axis. The slider on the left helps to select specific milestones in the book.

### Page 3

This page will also allo you to select a book and a milestone and read the reused passage side by side. 

### Pages 4-5

These pages deal with unique milestones and are still under development. 










_The template was originally developed by Sohail Merchant_
