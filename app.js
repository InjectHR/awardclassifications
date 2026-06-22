const form = document.querySelector("#awardForm");
const resetButton = document.querySelector("#resetButton");
const exportButton = document.querySelector("#exportButton");
const outcomeTitle = document.querySelector("#outcomeTitle");
const outcomeSummary = document.querySelector("#outcomeSummary");
const sidebarOutcome = document.querySelector("#sidebarOutcome");
const sidebarConfidence = document.querySelector("#sidebarConfidence");
const confidenceBar = document.querySelector("#confidenceBar");
const confidenceText = document.querySelector("#confidenceText");
const decisionList = document.querySelector("#decisionList");
const exampleList = document.querySelector("#exampleList");
const methodStack = document.querySelector("#methodStack");
const typeGrid = document.querySelector("#typeGrid");

const fields = [
  "businessActivity",
  "duties",
  "industryAward",
  "industryClassification",
  "occupationalAward",
  "occupationalClassification",
  "managerial",
  "professional",
  "highAutonomy",
  "supportOperational",
  "coverageClause",
  "definitions",
  "classificationStructure",
  "fairWorkLibrary",
  "agreementCheck"
];

const examples = [
  {
    title: "Software Engineer in manufacturing",
    tag: "Industry and occupational coverage",
    text: "A manufacturing company hires a Software Engineer to design and maintain internal production systems. The Manufacturing Award can have occupational coverage as well as industry coverage, and Fair Work Library guidance gives occupational-basis examples for trade-qualified maintenance work. HR should still test whether the Manufacturing Award contains a relevant occupational or classification pathway. If it does not fit the role, an occupational award such as the Professional Employees Award may also need to be assessed."
  },
  {
    title: "Cleaner at a pharmacy",
    tag: "Miscellaneous Award review",
    text: "The cleaner vacuums floors, cleans bathrooms, empties rubbish, sanitises counters, and maintains general cleanliness after trading hours. The role is not pharmacy work and not clerical work. Because the employee is operational, lower-skilled, and support-focused, the Miscellaneous Award may need to be considered. The Cleaning Services Award is an industry award and generally would not apply merely because the employee performs cleaning duties for a pharmacy."
  },
  {
    title: "Studio Assistant at a digital content studio",
    tag: "Support role test",
    text: "The assistant carries equipment, prepares filming areas, organises props, assists during shoots, cleans studio spaces, and performs general operational support tasks. If there is no clear industry award, no occupational award, and the role is not clerical, professional, or managerial, the Miscellaneous Award may potentially apply. The employee would not be award-free just because the role is unusual."
  },
  {
    title: "Interior Design Assistant in furniture manufacturing",
    tag: "Classification fit",
    text: "The assistant arranges showroom displays, prepares visual merchandising layouts, styles furniture for catalogues, selects colour palettes, and coordinates product display concepts. If the role is not manufacturing, clerical administration, or autonomous qualified interior design work, there may be no clear industry or occupational classification. The Miscellaneous Award may need review before any award-free conclusion."
  }
];

const methodSteps = [
  {
    title: "Start with the award coverage clause",
    why: "Do not begin with job title or salary. Begin with the award's coverage clause, then read the definitions and exclusions.",
    actions: [
      "Open the suspected award and read the coverage clause.",
      "Check whether it covers the employer's industry, the employee's occupation, or both.",
      "Remember that some awards are not purely one or the other. For example, Fair Work guidance shows the Manufacturing Award can have occupational coverage as well as industry coverage.",
      "Read definitions that control key terms used in coverage.",
      "Read exclusions before relying on the award.",
      "Check the Fair Work Library for award coverage guidance before finalising the view."
    ],
    output: "A short note naming the award reviewed, the relevant coverage wording, and any exclusions that may matter."
  },
  {
    title: "Examine the employer's business activities",
    why: "Industry awards depend on what the business actually does. A business can operate across multiple industries, and different employee groups may be covered by different awards.",
    actions: [
      "Identify the principal nature or substantial character of the business.",
      "Ask what the business primarily sells, what customers pay for, and what generates most revenue.",
      "Consider labour hours, operational focus, headcount in each division, and whether divisions are physically or operationally separate.",
      "Decide whether a secondary activity is incidental support or a separate operational function."
    ],
    output: "A business activity finding, including whether there may be more than one operational area requiring separate award analysis."
  },
  {
    title: "Examine the employee's actual duties",
    why: "The role is classified by what the employee actually performs, not what the position title suggests.",
    actions: [
      "List regular duties and core responsibilities.",
      "Estimate the percentage of time spent on each duty.",
      "Record skill level, qualifications, licences, training, and supervision level.",
      "Check whether the employee supervises, trains, coordinates, exercises independent judgment, makes operational decisions, or performs higher duties."
    ],
    output: "A duty profile that is detailed enough to compare against award classifications."
  },
  {
    title: "Check the classification structure",
    why: "An award may cover the employer generally but still not contain a classification that fits the employee's actual role.",
    actions: [
      "Read the classification schedule or classification definitions.",
      "Match the employee's duties, skill, responsibility, qualifications, and supervision level to the closest classification.",
      "Check whether the classification captures the substance of the role, not just one incidental task.",
      "If no classification fits, do not force the role into the award. Move to occupational award analysis."
    ],
    output: "A proposed classification level, or a clear reason why the industry award does not classify the role."
  },
  {
    title: "Consider exclusions and competing coverage",
    why: "An occupational award can become relevant where there is no industry award, where the industry award has no relevant classification, or where competing coverage must be resolved.",
    actions: [
      "Check whether an occupational award covers the employee's actual role or profession.",
      "Common examples from the uploaded material include Clerks Award, Professional Employees Award, and Commercial Sales Award.",
      "Do not assume a named industry award has no occupational reach. Check the award itself and Fair Work Library guidance; the Manufacturing Award is a useful reminder that some awards can operate across both industry and occupation-style coverage.",
      "Check whether the occupational award excludes the industry award or whether another award is more appropriate.",
      "Search the Fair Work Library for coverage guidance, then document why one award is preferred over another."
    ],
    output: "A competing coverage note explaining whether the role is better treated under an occupational award."
  },
  {
    title: "Only then consider Miscellaneous Award or award-free status",
    why: "The uploaded material is clear: Miscellaneous Award and award-free status are last-stage questions after other awards are excluded.",
    actions: [
      "If no industry or occupational award applies, test whether the Miscellaneous Award classifications fit.",
      "Do not treat someone as award-free merely because their role is unusual, well paid, or has a senior-sounding title.",
      "Remember the Miscellaneous Award is directed toward relatively junior, operational, support-style, trade, advanced trade, and sub-professional work.",
      "Only consider award-free status where the role is senior, managerial, professional, highly autonomous, or beyond modern award classifications generally."
    ],
    output: "A final classification pathway: industry award, occupational award, Miscellaneous Award, award-free review, or escalation."
  }
];

const awardTypes = [
  {
    title: "Industry awards",
    summary: "Cover employees working in a specific industry where the employer's business and the employee's duties are captured. Some awards also contain occupational-style coverage, so read the coverage clause carefully.",
    examples: "Examples: General Retail Industry Award, Hospitality Industry (General) Award, Social, Community, Home Care and Disability Services Industry Award, Dry Cleaning and Laundry Industry Award.",
    test: "Ask: does the employer operate in an industry covered by a modern award, and does the employee perform work captured by that award? Also ask whether the award has occupational coverage. Fair Work Library guidance shows the Manufacturing Award can apply this way in some circumstances."
  },
  {
    title: "Occupational awards",
    summary: "Consider where there is no industry award, where an industry award has no relevant classification for the employee, or where an occupational award is relevant and competing coverage must be considered.",
    examples: "Examples: Professional Employees Award, Commercial Sales Award, Clerks Award. Note: the Manufacturing Award can also have occupational coverage, including Fair Work Library examples involving trade-qualified maintenance work, so check the award wording before treating it as only an industry award.",
    test: "Ask: is there an occupational award covering the employee's actual role or profession?"
  },
  {
    title: "Miscellaneous Award",
    summary: "A limited safety-net award for employees not covered by another industry or occupational award, who are also not sufficiently senior, professional, managerial, or autonomous to be genuinely award-free.",
    examples: "Common fit indicators: junior, operational, support-focused, lower-skilled, trade, advanced trade, or sub-professional work.",
    test: "Ask: after excluding other awards, does the employee fit within the Miscellaneous Award classification structure and avoid its exclusions?"
  },
  {
    title: "Award-free status",
    summary: "Generally only appropriate after other modern awards, including the Miscellaneous Award, have been excluded.",
    examples: "Common indicators: senior executives, strategic managers, highly autonomous professionals, and specialist employees exercising substantial independent judgment.",
    test: "Ask: does the employee exceed the type of work contemplated by modern awards generally?"
  }
];

function getValue(id) {
  const el = document.querySelector(`#${id}`);
  if (el.type === "checkbox") return el.checked;
  return el.value.trim();
}

function buildState() {
  return Object.fromEntries(fields.map((id) => [id, getValue(id)]));
}

function calculateEvidence(state) {
  const important = [
    Boolean(state.businessActivity),
    Boolean(state.duties),
    Boolean(state.industryAward),
    Boolean(state.industryClassification),
    Boolean(state.occupationalAward),
    Boolean(state.occupationalClassification),
    state.coverageClause,
    state.definitions,
    state.classificationStructure,
    state.fairWorkLibrary,
    state.agreementCheck
  ];
  return Math.round((important.filter(Boolean).length / important.length) * 100);
}

function analyse(state) {
  const hasIndustry = state.industryAward === "yes" && state.industryClassification === "yes";
  const hasOccupational = state.occupationalAward === "yes" && state.occupationalClassification === "yes";
  const uncertain = [state.industryAward, state.industryClassification, state.occupationalAward, state.occupationalClassification].includes("unclear");
  const noAwardFound = ["no", "unclear"].includes(state.industryAward) && ["no", "unclear"].includes(state.occupationalAward);
  const professionalOrManagerial = state.managerial || state.professional || state.highAutonomy;

  if (!state.businessActivity || !state.duties) {
    return {
      title: "More facts needed",
      summary: "Start by documenting the business activity and actual duties. Award coverage turns on substance, not title alone.",
      steps: [
        ["Document business activity", "Record the principal nature of the business, revenue source, labour focus, and whether any divisions are separate operations."],
        ["Document actual duties", "Capture regular tasks, time spent, supervision, qualifications, decision-making, and whether duties match an award classification."]
      ]
    };
  }

  if (hasIndustry) {
    return {
      title: "Likely industry award path",
      summary: "An industry award appears to cover the employer and the employee's duties. Validate the coverage clause, exclusions, and classification level before relying on it.",
      steps: [
        ["Confirm coverage", "Check the award coverage clause, definitions, exclusions, Fair Work Library guidance, and any enterprise agreement."],
        ["Classify the role", "Match actual duties to the classification descriptors, not just the position title."],
        ["Record the rationale", "Keep a file note showing the business activity, role duties, classification selected, and unresolved assumptions."]
      ]
    };
  }

  if (hasOccupational) {
    return {
      title: "Likely occupational award path",
      summary: "The role may be better covered by an occupational award because the employee's actual work is not captured by the industry classification.",
      steps: [
        ["Test competing coverage", "Check whether the occupational award excludes or gives way to a relevant industry award."],
        ["Match duties to classification", "Use the employee's regular duties, skill level, qualifications, and autonomy to select the classification."],
        ["Validate current source", "Use current Fair Work resources, the Fair Work Library, and award text before confirming pay or conditions."]
      ]
    };
  }

  if (noAwardFound && state.supportOperational && !professionalOrManagerial) {
    return {
      title: "Miscellaneous Award review",
      summary: "No industry or occupational award is obvious, and the role looks operational or support-focused. The Miscellaneous Award may need review before deciding the employee is award-free.",
      steps: [
        ["Check the Miscellaneous Award", "Confirm the role fits the award's classification structure and is not excluded."],
        ["Avoid title-based shortcuts", "Do not assume award-free status because the role is unusual or because salary is above minimum rates."],
        ["Escalate if unclear", "Seek internal or legal review if the role is borderline professional, managerial, or highly autonomous."]
      ]
    };
  }

  if (noAwardFound && professionalOrManagerial) {
    return {
      title: "Award-free review",
      summary: "The role may be award-free if it is genuinely managerial, professional, highly autonomous, or beyond the classifications contemplated by modern awards. This needs careful validation.",
      steps: [
        ["Confirm exclusions", "Check industry, occupational, and Miscellaneous Award exclusions against actual duties."],
        ["Test professional status", "Look at degree requirements, specialist expertise, independent judgment, and strategic responsibility."],
        ["Document residual entitlements", "Award-free employees may still have National Employment Standards and minimum wage obligations."]
      ]
    };
  }

  if (uncertain) {
    return {
      title: "Evidence gap",
      summary: "One or more coverage questions is unclear. Pause the conclusion and gather enough evidence to choose between industry, occupational, Miscellaneous Award, or award-free review.",
      steps: [
        ["Review source text", "Start with coverage clauses, definitions, exclusions, classification structures, and Fair Work Library guidance."],
        ["Interview the manager", "Ask what the employee actually does, what customers pay for, and whether the activity is incidental or separate."],
        ["Use official tools", "Check current Fair Work award resources and the Pay and Conditions Tool where appropriate."]
      ]
    };
  }

  return {
    title: "Manual review required",
    summary: "The facts do not point cleanly to one path. Use the prompts below to identify missing evidence and escalate before making a classification decision.",
    steps: [
      ["Re-test all awards", "Assess industry awards first, occupational awards next, then the Miscellaneous Award."],
      ["Check actual duties", "Compare duties with classification descriptors and exclusions."],
      ["Escalate complex cases", "Seek internal policy, payroll, leadership, or legal review where risk remains."]
    ]
  };
}

function renderDecision(result, evidence) {
  outcomeTitle.textContent = result.title;
  outcomeSummary.textContent = result.summary;
  sidebarOutcome.textContent = result.title;
  sidebarConfidence.textContent = `Evidence completeness: ${evidence}%`;
  confidenceBar.style.width = `${evidence}%`;
  confidenceText.textContent = `Evidence completeness: ${evidence}%`;
  decisionList.innerHTML = result.steps
    .map((step, index) => `
      <article class="decision-item">
        <span class="decision-index">${index + 1}</span>
        <div>
          <h4>${step[0]}</h4>
          <p>${step[1]}</p>
        </div>
      </article>
    `)
    .join("");
}

function updateAnalysis() {
  const state = buildState();
  const evidence = calculateEvidence(state);
  renderDecision(analyse(state), evidence);
  localStorage.setItem("awardReaderState", JSON.stringify(state));
}

function restoreState() {
  const saved = JSON.parse(localStorage.getItem("awardReaderState") || "{}");
  fields.forEach((id) => {
    const el = document.querySelector(`#${id}`);
    if (!el || saved[id] === undefined) return;
    if (el.type === "checkbox") el.checked = saved[id];
    else el.value = saved[id];
  });
}

function renderExamples() {
  exampleList.innerHTML = examples
    .map((example) => `
      <article class="example-item">
        <span class="tag">${example.tag}</span>
        <h3>${example.title}</h3>
        <p>${example.text}</p>
      </article>
    `)
    .join("");
}

function renderMethod() {
  methodStack.innerHTML = methodSteps
    .map((step, index) => `
      <article class="method-item">
        <div class="method-number">${index + 1}</div>
        <div>
          <h3>${step.title}</h3>
          <p>${step.why}</p>
          <ul>${step.actions.map((action) => `<li>${action}</li>`).join("")}</ul>
          <p class="output-note"><strong>Output:</strong> ${step.output}</p>
        </div>
      </article>
    `)
    .join("");
}

function renderAwardTypes() {
  typeGrid.innerHTML = awardTypes
    .map((type) => `
      <article class="type-panel">
        <h3>${type.title}</h3>
        <p>${type.summary}</p>
        <p><strong>${type.examples}</strong></p>
        <p class="test-note">${type.test}</p>
      </article>
    `)
    .join("");
}

function exportBrief() {
  const state = buildState();
  const result = analyse(state);
  const evidence = calculateEvidence(state);
  const content = [
    "# Fair Work Award Reader Brief",
    "",
    `Generated: ${new Date().toLocaleString("en-AU")}`,
    "",
    "## Intake",
    `Business activity: ${state.businessActivity || "Not captured"}`,
    `Duties: ${state.duties || "Not captured"}`,
    `Possible industry award: ${state.industryAward || "Not selected"}`,
    `Industry classification fits: ${state.industryClassification || "Not selected"}`,
    `Possible occupational award: ${state.occupationalAward || "Not selected"}`,
    `Occupational classification fits: ${state.occupationalClassification || "Not selected"}`,
    "",
    "## Indicators",
    `Managerial or strategic: ${state.managerial ? "Yes" : "No"}`,
    `Professional or specialist: ${state.professional ? "Yes" : "No"}`,
    `High autonomy: ${state.highAutonomy ? "Yes" : "No"}`,
    `Support or operational: ${state.supportOperational ? "Yes" : "No"}`,
    `Fair Work Library checked: ${state.fairWorkLibrary ? "Yes" : "No"}`,
    "",
    "## Guidance",
    `Outcome: ${result.title}`,
    `Evidence completeness: ${evidence}%`,
    result.summary,
    "",
    "## Next steps",
    ...result.steps.map((step, index) => `${index + 1}. ${step[0]} - ${step[1]}`),
    "",
    "## Step-by-step method",
    ...methodSteps.flatMap((step, index) => [
      `${index + 1}. ${step.title}`,
      `Why: ${step.why}`,
      `Actions: ${step.actions.join(" | ")}`,
      `Output: ${step.output}`
    ]),
    "",
    "Training aid only. Verify current award text, agreements, and legal advice where needed."
  ].join("\n");

  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "award-reader-brief.md";
  link.click();
  URL.revokeObjectURL(url);
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

form.addEventListener("input", updateAnalysis);
resetButton.addEventListener("click", () => {
  localStorage.removeItem("awardReaderState");
  form.reset();
  updateAnalysis();
});
exportButton.addEventListener("click", exportBrief);

renderMethod();
renderAwardTypes();
renderExamples();
restoreState();
updateAnalysis();
