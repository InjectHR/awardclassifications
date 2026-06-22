<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Fair Work Award Reader</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <header class="topbar">
      <div>
        <p class="eyebrow">HR helper tool</p>
        <h1>Fair Work Award Reader</h1>
      </div>
      <div class="topbar-actions">
        <button class="ghost-button" id="resetButton" type="button">Reset</button>
        <button class="primary-button" id="exportButton" type="button">Export brief</button>
      </div>
    </header>

    <main class="app-shell">
      <aside class="sidebar" aria-label="Award classification workflow">
        <nav>
          <a href="#intake" class="nav-link active">Intake</a>
          <a href="#analysis" class="nav-link">Analysis</a>
          <a href="#examples" class="nav-link">Examples</a>
          <a href="#coach" class="nav-link">Coach check</a>
          <a href="#sources" class="nav-link">Sources</a>
        </nav>
        <section class="status-panel">
          <p class="panel-label">Current indication</p>
          <strong id="sidebarOutcome">Start intake</strong>
          <span id="sidebarConfidence">Complete the prompts to generate guidance.</span>
        </section>
      </aside>

      <section class="workspace">
        <section class="notice" aria-label="Important limitation">
          <strong>Training aid only.</strong>
          This tool helps HR teams structure award coverage thinking. It does not replace current award text, the Fair Work tools, internal review, or legal advice.
        </section>

        <section id="intake" class="section">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Step 1</p>
              <h2>Role and Business Intake</h2>
            </div>
            <p>Capture the facts that usually drive award coverage: employer activity, actual duties, classification fit, exclusions, and whether the role looks managerial, professional, or support-based.</p>
          </div>

          <form id="awardForm" class="intake-grid">
            <label class="field wide">
              <span>Employer's main business activity</span>
              <textarea id="businessActivity" rows="4" placeholder="Example: furniture manufacturing with a wholesale showroom division"></textarea>
            </label>

            <label class="field wide">
              <span>Employee's actual duties</span>
              <textarea id="duties" rows="5" placeholder="List regular tasks, percentage of time, supervision level, judgement, qualifications and people leadership"></textarea>
            </label>

            <label class="field">
              <span>Possible industry award?</span>
              <select id="industryAward">
                <option value="">Select one</option>
                <option value="yes">Yes, likely</option>
                <option value="unclear">Unclear</option>
                <option value="no">No obvious industry award</option>
              </select>
            </label>

            <label class="field">
              <span>Industry classification fits the duties?</span>
              <select id="industryClassification">
                <option value="">Select one</option>
                <option value="yes">Yes</option>
                <option value="unclear">Unclear</option>
                <option value="no">No</option>
              </select>
            </label>

            <label class="field">
              <span>Possible occupational award?</span>
              <select id="occupationalAward">
                <option value="">Select one</option>
                <option value="yes">Yes, likely</option>
                <option value="unclear">Unclear</option>
                <option value="no">No obvious occupational award</option>
              </select>
            </label>

            <label class="field">
              <span>Occupational classification fits?</span>
              <select id="occupationalClassification">
                <option value="">Select one</option>
                <option value="yes">Yes</option>
                <option value="unclear">Unclear</option>
                <option value="no">No</option>
              </select>
            </label>

            <fieldset class="check-group">
              <legend>Role indicators</legend>
              <label><input type="checkbox" id="managerial" /> Managerial or strategic</label>
              <label><input type="checkbox" id="professional" /> Professional or degree-linked specialist</label>
              <label><input type="checkbox" id="highAutonomy" /> High autonomy and independent judgment</label>
              <label><input type="checkbox" id="supportOperational" /> Junior, operational, or support-focused</label>
            </fieldset>

            <fieldset class="check-group">
              <legend>Evidence gathered</legend>
              <label><input type="checkbox" id="coverageClause" /> Coverage clause reviewed</label>
              <label><input type="checkbox" id="definitions" /> Definitions and exclusions checked</label>
              <label><input type="checkbox" id="classificationStructure" /> Classification structure checked</label>
              <label><input type="checkbox" id="agreementCheck" /> Enterprise agreement checked</label>
            </fieldset>
          </form>
        </section>

        <section id="analysis" class="section analysis-layout">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Step 2</p>
              <h2>Decision Guidance</h2>
            </div>
            <p>The result is an indication for review, not a legal conclusion. Use it to decide what to validate next.</p>
          </div>

          <div class="result-panel">
            <p class="panel-label">Likely next path</p>
            <h3 id="outcomeTitle">Complete the intake to see guidance</h3>
            <p id="outcomeSummary">The tool will point you toward industry award, occupational award, Miscellaneous Award, award-free review, or more evidence needed.</p>
            <div class="confidence-meter" aria-label="Evidence completeness">
              <span id="confidenceBar"></span>
            </div>
            <p id="confidenceText">Evidence completeness: 0%</p>
          </div>

          <div class="decision-list" id="decisionList"></div>
        </section>

        <section class="section">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Step 3</p>
              <h2>Questions to Ask</h2>
            </div>
            <p>Use these prompts in manager interviews, role reviews, and classification file notes.</p>
          </div>

          <div class="question-columns">
            <div>
              <h3>Business operation</h3>
              <ul>
                <li>What does the business primarily sell or deliver?</li>
                <li>What generates most revenue and labour hours?</li>
                <li>Are divisions operationally separate or merely supporting the main business?</li>
                <li>How does the business describe itself commercially?</li>
              </ul>
            </div>
            <div>
              <h3>Role substance</h3>
              <ul>
                <li>What tasks are performed regularly?</li>
                <li>What percentage of time is spent on each duty?</li>
                <li>What qualifications, licences, training, or specialist skill are required?</li>
                <li>Does the employee supervise, coordinate, or make operational decisions?</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="examples" class="section">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Reference</p>
              <h2>Scenario Examples</h2>
            </div>
            <p>Based on the uploaded training content, these examples show how the logic should be applied.</p>
          </div>

          <div class="example-list" id="exampleList"></div>
        </section>

        <section id="coach" class="section coach-layout">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Practice</p>
              <h2>Chatbot Knowledge Check</h2>
            </div>
            <p>Answer the scenario prompts, then compare your response with the coaching notes.</p>
          </div>

          <div class="chat-panel" id="chatPanel" aria-live="polite"></div>
          <div class="chat-actions">
            <button class="primary-button" id="nextPrompt" type="button">Start check</button>
            <button class="ghost-button" id="revealAnswer" type="button" disabled>Show coaching</button>
          </div>
          <label class="field wide">
            <span>Your answer notes</span>
            <textarea id="learnerNotes" rows="4" placeholder="Type the points you would raise before showing the model answer"></textarea>
          </label>
        </section>

        <section id="sources" class="section sources">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Governance</p>
              <h2>Sources and Review Notes</h2>
            </div>
            <p>Keep this section visible when sharing the tool internally.</p>
          </div>
          <ul>
            <li>Uploaded training content: award classification notes covering industry awards, occupational awards, Miscellaneous Award, and award-free assessment.</li>
            <li>Fair Work Ombudsman: <a href="https://www.fairwork.gov.au/employment-conditions/awards/awards-summary/ma000104-summary" target="_blank" rel="noreferrer">Miscellaneous Award summary</a>.</li>
            <li>Fair Work Ombudsman: <a href="https://www.fairwork.gov.au/employment-conditions/awards/award-and-agreement-free-wages-and-conditions" target="_blank" rel="noreferrer">award and agreement free wages and conditions</a>.</li>
            <li>Fair Work Commission: <a href="https://www.fwc.gov.au/work-conditions/awards/find-award" target="_blank" rel="noreferrer">find an award</a>.</li>
          </ul>
          <p class="review-note">Review before production: current award clauses, enterprise agreements, role descriptions, actual duties, exclusions, pay obligations, and legal advice for complex or contested classifications.</p>
        </section>
      </section>
    </main>

    <script src="./app.js"></script>
  </body>
</html>
