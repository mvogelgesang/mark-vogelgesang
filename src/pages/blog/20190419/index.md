---
layout: "../../../layouts/BlogPost.astro"
pubDate: Apr 19, 2019
title: "Sheets to Email with Google Apps Script"
tags: ["apps script", "google sheets"]
description: "Regularly scheduled program reviews should be an exercise in sharing the right information and discussing paths forward. Instead, too many teams are focusing on overly detailed power point criteria and manual processes. Automation with Google Apps Script can save everyone a lot of grief."
hero:
  alt: "Brick wall"
  src: "/posts/20190419/robieHouse.jpeg"
---
<figcaption class="caption">“Robie House, Chicago, IL” by Mark Vogelgesang</figcaption>

## The Goal

1. Stop people from banging their head against a brick wall
1. Provide non-technical users the ability to manage a rich text e-mail template via Google Sheets without editing any Apps Script code.

## The Situation

A team I work with uses a spreadsheet to track upcoming project reviews across a large division. To notify the project team of an upcoming review, the reviewers pull an e-mail template from Docs, paste it into Gmail, and then edit as needed. The e-mail template contains rich formatting to stress/highlight particular actions needed from a project team — lots of font sizes and colors used. The reviewer team does this quarterly for 50+ projects- that’s a lot of manual work. What if they had a place to manage the template content within Sheets and ultimately fire off the e-mail from there!?

## The Challenge

Sheets and Gmail require different encoding to manage rich text. In Sheets, the `RichTextValue` class is used to manage the text and related styling for a given cell or cells. Meanwhile, Gmail requires any rich text to be written as HTML. Passing a `RichTextValue` object to Gmail results in the following:

`com.google.apps.maestro.server.beans.trix.impl.RichTextValueApiAdapter@1f447bd0`

Yea, not helpful. Converting that value to text via `getText()` results in plain text. Again, not helpful. Looking at the `RichTextValue` class and other related classes, an HTML conversion method did not exist.
Workaround

Build a converter! Everything needed exists within the `RichTextValue` class but it requires some elbow grease.
A `RichTextValue` object is made up of one or more `RichTextValue` objects that can be broken down into what Google calls, Runs. Runs are segments of contiguous text that contain the same formatting. For instance, the following text sentence, “The **quick** brown **_fox ju_**mps…” would be segmented as follows:

`[“The ”, ”quick ”, “brown ”, “fox ju”, “mps…”]`

Since each Run is an instance of the `RichTextValue` class it contains attributes stored in the `TextStyle` class and are accessible via `getTextStyle()` method. `TextStyle` provides information about all of the styling attributes for a given Run. Using this information, the `RichTextValue` can be converted into a string of HTML which gets passed to `theMailApp.sendEmail()` function as an attribute of htmlBody.

This is certainly not ideal and I would imagine that the Google Apps Script team will provide a built in function to address this over the long term.

The two relevant conversion functions are below along with more detailed comments in-line. Finally, if you’d like to get hands on, copy [this public Sheet](https://docs.google.com/spreadsheets/d/1ZWWJ6-CPAMOT_5iL2FuEX8wJ7muFicvbwqgNoEbUzjg/edit?usp=sharing) and give it a whirl. As with all things Apps Script related, it will not run without your explicit authorization and explanation of scopes involved.

<script src="https://gist.github.com/mvogelgesang/8fe14931d79ed79d73154d969f02aada.js"></script>

This article originally appeared on Medium at https://medium.com/@mvogelgesang/sheets-to-email-with-google-apps-script-fa7eac0b90c5
