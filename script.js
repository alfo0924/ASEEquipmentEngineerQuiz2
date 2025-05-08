// 測驗題目資料
const quizData = [
    {
        question: "半導體設備工程師主要負責哪些工作？",
        options: [
            "僅負責設備維修",
            "設備安裝、維護、故障排除及效能優化",
            "僅負責軟體開發",
            "僅負責產品設計"
        ],
        answer: 1,
        category: "工作職責",
        explanation: "半導體設備工程師的主要職責包括設備安裝、維護、故障排除及效能優化，確保生產線設備正常運作。"
    },
    {
        question: "在半導體製程中，FOUP是什麼？",
        options: [
            "一種測試設備",
            "一種晶圓拋光技術",
            "前開式晶圓承載盒",
            "一種光刻技術"
        ],
        answer: 2,
        category: "專業知識",
        explanation: "FOUP (Front Opening Unified Pod) 是前開式晶圓承載盒，用於300mm晶圓的存放和運送，可以保持無塵環境。"
    },
    {
        question: "當設備出現異常警報時，設備工程師應該優先做什麼？",
        options: [
            "立即關閉設備電源",
            "忽略警報繼續生產",
            "檢查警報代碼並評估問題嚴重性",
            "直接更換零件"
        ],
        answer: 2,
        category: "問題處理",
        explanation: "設備出現異常警報時，應優先檢查警報代碼並評估問題嚴重性，以確定適當的處理方式，避免不必要的停機或安全風險。"
    },
    {
        question: "半導體設備工程師需要具備哪些基本技能？",
        options: [
            "只需要機械知識",
            "只需要電子電路知識",
            "機械、電子、真空、氣動、電腦等多領域知識",
            "只需要軟體編程能力"
        ],
        answer: 2,
        category: "專業技能",
        explanation: "半導體設備工程師需要具備機械、電子、真空、氣動、電腦等多領域知識，因為半導體設備涉及多種技術的整合。"
    },
    {
        question: "MTBF代表什麼意思？",
        options: [
            "最大故障時間",
            "平均故障間隔時間",
            "最小測試批次頻率",
            "最大傳輸位元頻率"
        ],
        answer: 1,
        category: "專業知識",
        explanation: "MTBF (Mean Time Between Failures) 代表平均故障間隔時間，是衡量設備可靠性的重要指標。"
    },
    {
        question: "在設備維護中，PM代表什麼？",
        options: [
            "產品管理",
            "性能監控",
            "預防性維護",
            "問題修復"
        ],
        answer: 2,
        category: "設備維護",
        explanation: "PM (Preventive Maintenance) 代表預防性維護，是定期對設備進行檢查和維護，以預防故障發生。"
    },
    {
        question: "在半導體製程中，CMP代表什麼工藝？",
        options: [
            "化學機械研磨",
            "控制監測程序",
            "臨界模式處理",
            "晶圓切割方法"
        ],
        answer: 0,
        category: "專業知識",
        explanation: "CMP (Chemical Mechanical Polishing) 代表化學機械研磨，是半導體製程中用於平坦化晶圓表面的重要工藝。"
    },
    {
        question: "設備工程師面對主管給予的未知問題時，應該如何解決？",
        options: [
            "直接告知無法解決",
            "等待他人提供解決方案",
            "系統性分析問題，收集資料，尋求協助並提出可能的解決方案",
            "隨機嘗試不同方法"
        ],
        answer: 2,
        category: "問題處理",
        explanation: "面對未知問題，應系統性分析問題，收集相關資料，必要時尋求協助，並基於分析結果提出可能的解決方案。"
    },
    {
        question: "半導體設備工程師對於工作中的「良率」(Yield)理解應該是什麼？",
        options: [
            "設備運行時間百分比",
            "產品通過測試的比例",
            "設備維修速度",
            "員工工作效率"
        ],
        answer: 1,
        category: "專業知識",
        explanation: "良率(Yield)是指產品通過測試的比例，是衡量製程品質的重要指標，設備工程師需確保設備穩定運行以維持高良率。"
    },
    {
        question: "在半導體設備中，MFC代表什麼？",
        options: [
            "主要故障控制",
            "最大流量計算",
            "質量流量控制器",
            "多功能控制器"
        ],
        answer: 2,
        category: "專業知識",
        explanation: "MFC (Mass Flow Controller) 代表質量流量控制器，用於精確控制氣體流量，在半導體製程中非常重要。"
    },
    {
        question: "設備工程師在進行故障排除時，應採取什麼策略？",
        options: [
            "直接更換所有可能故障的零件",
            "等待設備完全故障再處理",
            "系統性分析，從簡單檢查開始，逐步深入",
            "只檢查最複雜的部分"
        ],
        answer: 2,
        category: "問題處理",
        explanation: "故障排除應採取系統性分析策略，從簡單的檢查開始，如電源、連接等，再逐步深入到更複雜的部分，以高效找出問題根源。"
    },
    {
        question: "半導體設備工程師在設備安裝完成後，下一步應該做什麼？",
        options: [
            "直接投入生產",
            "進行設備驗證和校準",
            "等待下一個維護週期",
            "更新軟體"
        ],
        answer: 1,
        category: "設備維護",
        explanation: "設備安裝完成後，應進行設備驗證和校準，確保設備各項參數符合規格要求，才能投入生產。"
    },
    {
        question: "在半導體產業中，SEMI標準是指什麼？",
        options: [
            "半導體設備製造指南",
            "安全環境管理指標",
            "半導體設備材料國際標準",
            "半導體工程師管理指南"
        ],
        answer: 2,
        category: "專業知識",
        explanation: "SEMI (Semiconductor Equipment and Materials International) 標準是半導體設備材料國際標準，用於規範半導體製造設備和材料。"
    },
    {
        question: "設備工程師應如何看待「工作與生活平衡」？",
        options: [
            "工作永遠第一，生活可以犧牲",
            "只關注生活品質，工作隨意應付",
            "在確保工作品質的同時，合理安排時間兼顧生活",
            "完全分離工作和生活，互不影響"
        ],
        answer: 2,
        category: "職業發展",
        explanation: "良好的工作與生活平衡是在確保工作品質的同時，合理安排時間兼顧生活，這有助於提高工作效率和長期職業發展。"
    },
    {
        question: "半導體設備的「校準」(Calibration)主要目的是什麼？",
        options: [
            "提高設備運行速度",
            "確保測量和控制的準確性",
            "延長設備使用壽命",
            "減少能源消耗"
        ],
        answer: 1,
        category: "設備維護",
        explanation: "設備校準的主要目的是確保測量和控制的準確性，這對於半導體製程的精確控制和產品品質至關重要。"
    },
    {
        question: "在設備故障分析中，「根本原因分析」(RCA)的目的是什麼？",
        options: [
            "快速修復設備",
            "找出並解決問題的根本原因，防止再次發生",
            "確定責任歸屬",
            "記錄故障現象"
        ],
        answer: 1,
        category: "問題處理",
        explanation: "根本原因分析(RCA)的目的是找出並解決問題的根本原因，而不僅僅是表面現象，從而防止同類問題再次發生。"
    },
    {
        question: "半導體設備工程師應如何應對技術快速變化的挑戰？",
        options: [
            "只專注於目前使用的技術",
            "等待公司提供培訓",
            "持續學習新技術，參與專業社群和培訓",
            "完全依賴設備供應商提供支援"
        ],
        answer: 2,
        category: "職業發展",
        explanation: "面對技術快速變化，設備工程師應持續學習新技術，主動參與專業社群和培訓，保持技術敏感度和競爭力。"
    },
    {
        question: "在半導體設備中，「Particle」(微粒)控制為何重要？",
        options: [
            "只影響設備外觀，不影響功能",
            "微粒可能導致晶片缺陷，降低良率",
            "只影響設備運行速度",
            "只是一種行業習慣"
        ],
        answer: 1,
        category: "專業知識",
        explanation: "微粒控制非常重要，因為微小的顆粒可能導致晶片缺陷，直接影響產品良率和品質，尤其在先進製程中更為關鍵。"
    },
    {
        question: "設備工程師在進行設備升級時，應優先考慮什麼因素？",
        options: [
            "僅考慮成本因素",
            "僅考慮性能提升",
            "綜合評估效益、風險、成本和兼容性",
            "僅遵循供應商建議"
        ],
        answer: 2,
        category: "設備維護",
        explanation: "設備升級應綜合評估效益、風險、成本和兼容性，確保升級能帶來實質改善，同時不會對現有系統造成負面影響。"
    },
    {
        question: "半導體設備工程師的職業發展方向可能包括哪些？",
        options: [
            "只能做設備維護",
            "技術專家、設備經理、專案管理或技術支援等多種方向",
            "只能轉向銷售崗位",
            "沒有明確的職業發展路徑"
        ],
        answer: 1,
        category: "職業發展",
        explanation: "半導體設備工程師的職業發展方向多元，可以成為技術專家、設備經理、專案管理人員，或轉向技術支援、應用工程等領域。"
    }
];

// 初始化測驗
function initQuiz() {
    const quizForm = document.getElementById('quiz-form');

    // 生成所有題目
    quizData.forEach((questionData, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.className = 'question-container';
        questionContainer.id = `question-${index}`;

        // 題目標題
        const questionTitle = document.createElement('h3');
        questionTitle.className = 'question-title';
        questionTitle.textContent = `${index + 1}. ${questionData.question}`;
        questionContainer.appendChild(questionTitle);

        // 選項容器
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';

        // 生成選項
        questionData.options.forEach((option, optionIndex) => {
            const optionLabel = document.createElement('label');
            optionLabel.className = 'option-label';

            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `question-${index}`;
            radioInput.value = optionIndex;
            radioInput.required = true;

            const optionText = document.createTextNode(option);

            optionLabel.appendChild(radioInput);
            optionLabel.appendChild(optionText);
            optionsContainer.appendChild(optionLabel);
        });

        questionContainer.appendChild(optionsContainer);

        // 添加反饋區域（初始隱藏）
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback hidden';
        feedbackDiv.id = `feedback-${index}`;
        questionContainer.appendChild(feedbackDiv);

        quizForm.appendChild(questionContainer);
    });

    // 添加提交按鈕事件
    document.getElementById('submit-btn').addEventListener('click', submitQuiz);
    document.getElementById('reset-btn').addEventListener('click', resetQuiz);
}

// 提交測驗
function submitQuiz() {
    let score = 0;
    const categoryResults = {};

    // 檢查每個問題的答案
    quizData.forEach((questionData, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        const feedbackDiv = document.getElementById(`feedback-${index}`);
        const questionContainer = document.getElementById(`question-${index}`);

        // 初始化類別統計
        if (!categoryResults[questionData.category]) {
            categoryResults[questionData.category] = {
                total: 0,
                correct: 0
            };
        }
        categoryResults[questionData.category].total++;

        if (selectedOption) {
            const selectedValue = parseInt(selectedOption.value);

            // 檢查答案是否正確
            if (selectedValue === questionData.answer) {
                score++;
                feedbackDiv.className = 'feedback correct';
                feedbackDiv.textContent = '正確！';
                categoryResults[questionData.category].correct++;
            } else {
                feedbackDiv.className = 'feedback incorrect';
                feedbackDiv.innerHTML = `
                    <div>錯誤！</div>
                    <div class="correct-answer">正確答案: ${questionData.options[questionData.answer]}</div>
                    <div>${questionData.explanation}</div>
                `;
            }

            // 禁用選項
            const options = questionContainer.querySelectorAll('input[type="radio"]');
            options.forEach(option => {
                option.disabled = true;
            });

            // 標記正確答案
            const correctLabel = questionContainer.querySelectorAll('.option-label')[questionData.answer];
            correctLabel.style.borderColor = '#4CAF50';

            // 顯示反饋
            feedbackDiv.classList.remove('hidden');
        }
    });

    // 顯示分數
    document.getElementById('score').textContent = score;
    document.getElementById('progress-fill').style.width = `${(score / quizData.length) * 100}%`;
    document.getElementById('score-section').classList.remove('hidden');

    // 生成分析摘要
    generateAnalysisSummary(categoryResults);

    // 隱藏提交按鈕，顯示重置按鈕
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('reset-btn').classList.remove('hidden');

    // 滾動到頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 生成分析摘要
function generateAnalysisSummary(categoryResults) {
    const analysisSummary = document.getElementById('analysis-summary');
    analysisSummary.innerHTML = '<h3>類別分析</h3>';

    // 計算每個類別的表現
    for (const category in categoryResults) {
        const result = categoryResults[category];
        const percentage = Math.round((result.correct / result.total) * 100);

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category-analysis';

        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = `${category}: ${result.correct}/${result.total} (${percentage}%)`;

        const recommendation = document.createElement('div');
        if (percentage < 60) {
            recommendation.textContent = `建議: 需要加強 ${category} 相關知識。`;
        } else if (percentage < 80) {
            recommendation.textContent = `建議: ${category} 知識有基礎，但仍需深入學習。`;
        } else {
            recommendation.textContent = `建議: ${category} 掌握良好，可以進一步鞏固。`;
        }

        categoryDiv.appendChild(categoryTitle);
        categoryDiv.appendChild(recommendation);
        analysisSummary.appendChild(categoryDiv);
    }

    // 添加總體評價
    const totalScore = parseInt(document.getElementById('score').textContent);
    const totalPercentage = Math.round((totalScore / quizData.length) * 100);

    const overallDiv = document.createElement('div');
    overallDiv.style.marginTop = '15px';
    overallDiv.style.fontWeight = 'bold';

    if (totalPercentage < 60) {
        overallDiv.textContent = '總體評價: 需要加強基礎知識，建議系統性學習半導體設備相關知識。';
    } else if (totalPercentage < 80) {
        overallDiv.textContent = '總體評價: 具備基本知識，可針對薄弱環節進行強化。';
    } else {
        overallDiv.textContent = '總體評價: 表現優秀，具備扎實的半導體設備工程知識。';
    }

    analysisSummary.appendChild(overallDiv);
}

// 重置測驗
function resetQuiz() {
    // 重置表單
    document.getElementById('quiz-form').reset();

    // 啟用所有選項
    const options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.disabled = false;
    });

    // 隱藏所有反饋
    const feedbacks = document.querySelectorAll('.feedback');
    feedbacks.forEach(feedback => {
        feedback.classList.add('hidden');
    });

    // 重置選項樣式
    const optionLabels = document.querySelectorAll('.option-label');
    optionLabels.forEach(label => {
        label.style.borderColor = '#e0e0e0';
    });

    // 隱藏分數區域
    document.getElementById('score-section').classList.add('hidden');

    // 顯示提交按鈕，隱藏重置按鈕
    document.getElementById('submit-btn').classList.remove('hidden');
    document.getElementById('reset-btn').classList.add('hidden');
}

// 頁面加載時初始化測驗
document.addEventListener('DOMContentLoaded', initQuiz);
