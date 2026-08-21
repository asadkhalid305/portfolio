---
name: add-experience
description: Add a professional or community role to this portfolio's experience data. Use when recording a new job, contract, internship, or volunteer position.
---

# Add experience

1. Read `src/utils/types.ts` and the relevant arrays in `src/constants/experience.json` before asking questions.
2. Determine whether the role is professional or community. Gather missing details in small batches: company, role, supported employment type, period, duration, location, work mode, optional link, description, responsibilities, and achievements.
3. Use only schema-supported values. Generate a unique `exp-<company-slug>` ID, adding a stable suffix if needed.
4. Append the record to `professionalExperiences` or `communityExperiences`. Do not reorder or modify existing records.
5. Ask whether the role should appear in the three-item `items` preview. If yes, add it and remove only the oldest preview item required to keep exactly three.
6. Run the portfolio validator and fix errors caused by the new record.
7. Summarize both arrays changed. Flag likely chatbot drift without editing the chatbot automatically.
