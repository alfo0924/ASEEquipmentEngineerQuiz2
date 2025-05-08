document.addEventListener('DOMContentLoaded', function() {
    // 測驗題目資料
    const quizData = [
        {
            question: "1. 日月光設備工程師的主要工作內容是什麼？",
            options: [
                "只負責文書處理和報表製作",
                "定期維護保養生產設備機台、故障排除及異常查修",
                "只負責產品品質檢驗",
                "主要負責客戶接待和業務推廣"
            ],
            correctAnswer: 1,
            explanation: "設備工程師主要負責定期維護保養生產設備機台、故障排除及異常查修，以及設備問題改善和維持生產機台設備的正常運轉。"
        },
        {
            question: "2. 日月光設備工程師的工作時間安排通常是？",
            options: [
                "固定朝九晚五，不需輪班",
                "三班制，每週輪換一次",
                "四班二輪(做2休2)，約2-3個月輪一次早晚班",
                "固定夜班，不需輪換"
            ],
            correctAnswer: 2,
            explanation: "日月光設備工程師需配合四班二輪(做2休2)輪班，約2-3個月輪一次早晚班。日班時間通常為07:30~19:35。"
        },
        {
            question: "3. 日月光設備工程師的面試通常包含哪些測驗？",
            options: [
                "只有主管面試，沒有筆試",
                "英文測驗和邏輯測驗",
                "體能測驗和專業技能測驗",
                "心理測驗和性格測驗"
            ],
            correctAnswer: 1,
            explanation: "日月光設備工程師的面試通常包含英文測驗(類似多益的題目)和邏輯測驗(圖形、數字、文字測驗)。"
        },
        {
            question: "4. 日月光設備工程師的工作環境特點是？",
            options: [
                "可以自由穿著，無特殊要求",
                "需要穿無塵衣，進公司禁止攜帶智慧型手機",
                "可以遠端工作，不需要到現場",
                "主要在戶外工作環境"
            ],
            correctAnswer: 1,
            explanation: "日月光設備工程師需要穿無塵衣，進公司禁止攜帶智慧型手機，這是半導體產業的標準要求。"
        },
        {
            question: "5. 日月光設備工程師面試中，主管最常問到的問題是？",
            options: [
                "政治立場和宗教信仰",
                "家庭背景和婚姻狀況",
                "自我介紹、專業能力和是否能配合加班",
                "興趣愛好和休閒活動"
            ],
            correctAnswer: 2,
            explanation: "面試中主管最常問到的問題包括自我介紹、專業能力、是否能配合加班、對公司的了解等。"
        },
        {
            question: "6. 日月光設備工程師的薪資範圍通常是？",
            options: [
                "月薪25,000至30,000元",
                "月薪33,000至50,000元",
                "月薪20,000至25,000元",
                "固定月薪60,000元"
            ],
            correctAnswer: 1,
            explanation: "根據資料，日月光設備工程師的薪資範圍通常是月薪33,000至50,000元，實際薪資可能因個人資歷或績效而異。"
        },
        {
            question: "7. 日月光設備工程師的日班工作時間通常是？",
            options: [
                "09:00-17:00",
                "08:00-16:00",
                "07:30-19:35",
                "06:00-14:00"
            ],
            correctAnswer: 2,
            explanation: "日月光設備工程師的日班工作時間通常是07:30-19:35，夜班則是19:00-07:00左右。"
        },
        {
            question: "8. 日月光設備工程師面試中的英文測驗通常是什麼形式？",
            options: [
                "全英文面試對話",
                "英文演講",
                "仿多益的題目，包含聽力和閱讀",
                "英文寫作測驗"
            ],
            correctAnswer: 2,
            explanation: "日月光英文測驗通常是仿多益的題目，包含聽力(圖片題、對話問題回答)及閱讀(填空單字及文法題、文章閱讀)。"
        },
        {
            question: "9. 日月光設備工程師需要具備什麼學歷要求？",
            options: [
                "博士以上",
                "高中職即可",
                "專科、大學或碩士",
                "只看工作經驗，無學歷要求"
            ],
            correctAnswer: 2,
            explanation: "日月光設備工程師的學歷要求通常是專科、大學或碩士，相關科系優先考慮。"
        },
        {
            question: "10. 日月光設備工程師的面試流程通常包括哪些環節？",
            options: [
                "只有一輪主管面試",
                "筆試、主管面試和人資面試",
                "團體面試和實作測驗",
                "電話面試和視訊面試"
            ],
            correctAnswer: 1,
            explanation: "日月光設備工程師的面試流程通常包括筆試(英文和邏輯測驗)、主管面試和人資面試。"
        },
        {
            question: "11. 日月光設備工程師的工作是否需要相關經驗？",
            options: [
                "必須有5年以上相關經驗",
                "必須有3年以上相關經驗",
                "無經驗可，公司提供完整在職訓練",
                "只招收有10年以上經驗的資深工程師"
            ],
            correctAnswer: 2,
            explanation: "日月光設備工程師無經驗可應徵，公司會提供完整在職訓練，但有相關經驗者優先考慮。"
        },
        {
            question: "12. 日月光設備工程師需要具備什麼語言能力？",
            options: [
                "精通日語",
                "英文聽說讀寫略通即可",
                "必須精通英文",
                "不需要任何外語能力"
            ],
            correctAnswer: 1,
            explanation: "日月光設備工程師需要具備英文聽說讀寫略通的能力，足以應付基本工作需求。"
        },
        {
            question: "13. 日月光設備工程師的工作地點主要在哪裡？",
            options: [
                "台北市內湖區",
                "新竹科學園區",
                "高雄楠梓科技產業園區",
                "台中科學園區"
            ],
            correctAnswer: 2,
            explanation: "根據資料，日月光設備工程師的工作地點主要在高雄楠梓科技產業園區(經三路26號)。"
        },
        {
            question: "14. 日月光設備工程師面試中的邏輯測驗包含哪些內容？",
            options: [
                "只有數學計算題",
                "圖形測驗、數字測驗和文字測驗",
                "只有程式設計題",
                "只有英文邏輯題"
            ],
            correctAnswer: 1,
            explanation: "日月光設備工程師面試中的邏輯測驗包含圖形測驗、數字測驗和文字測驗，測試應徵者的邏輯思考能力。"
        },
        {
            question: "15. 日月光設備工程師的福利包括哪些？",
            options: [
                "只有基本勞健保",
                "提撥盈餘為員工分紅、三節獎金及禮金、健身房等多項福利",
                "只有年終獎金",
                "無任何額外福利"
            ],
            correctAnswer: 1,
            explanation: "日月光提供多項福利，包括提撥5％-7％之年盈餘為員工分紅、三節獎金及禮金、健身房、假日加班免費用餐等。"
        },
        {
            question: "16. 日月光設備工程師面試時，如何回答「能否配合加班」的問題最適當？",
            options: [
                "表示完全不能加班",
                "表示可以配合公司需求加班",
                "表示只能偶爾加班",
                "表示需要額外加班費才願意加班"
            ],
            correctAnswer: 1,
            explanation: "面試時回答「能否配合加班」的問題，最好表示可以配合公司需求加班，展現工作配合度和責任感。"
        },
        {
            question: "17. 日月光設備工程師的主要職責之一是什麼？",
            options: [
                "產品設計和研發",
                "市場行銷和客戶開發",
                "設備問題改善及異常分析與追蹤處理",
                "人力資源管理"
            ],
            correctAnswer: 2,
            explanation: "日月光設備工程師的主要職責之一是設備問題改善及異常分析與追蹤處理，確保生產設備正常運轉。"
        },
        {
            question: "18. 日月光設備工程師面試中，自我介紹應該包含哪些內容？",
            options: [
                "只需介紹姓名和應徵職位",
                "詳細介紹家庭背景和成長經歷",
                "介紹畢業學校、專長、證照和相關經驗",
                "主要介紹個人興趣愛好"
            ],
            correctAnswer: 2,
            explanation: "自我介紹應該包含畢業學校、專長、證照和相關經驗等專業資訊，時間控制在2分鐘左右為佳。"
        },
        {
            question: "19. 日月光設備工程師的工作性質屬於？",
            options: [
                "兼職工作",
                "約聘工作",
                "全職工作",
                "實習工作"
            ],
            correctAnswer: 2,
            explanation: "日月光設備工程師的工作性質屬於全職工作，需要全時間投入。"
        },
        {
            question: "20. 日月光設備工程師面試時，如何回答「為什麼選擇日月光」的問題最適當？",
            options: [
                "只因為薪水高",
                "因為找不到其他工作",
                "可以結合個人專長、地利因素和公司產業地位等因素",
                "因為朋友推薦"
            ],
            correctAnswer: 2,
            explanation: "回答「為什麼選擇日月光」時，最好結合個人專長、地利因素(如住在高雄)和公司產業地位(封裝測試大廠)等因素，展現對公司的了解和認同。"
        }
    ];

    // 生成測驗題目
    const quizForm = document.getElementById('quiz-form');

    quizData.forEach((questionData, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.className = 'question-container';
        questionContainer.id = `question-${index}`;

        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.textContent = questionData.question;

        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options';

        questionData.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('label');
            optionElement.className = 'option';

            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `question-${index}`;
            radioInput.value = optionIndex;

            const optionText = document.createTextNode(option);

            optionElement.appendChild(radioInput);
            optionElement.appendChild(optionText);
            optionsContainer.appendChild(optionElement);
        });

        const resultContainer = document.createElement('div');
        resultContainer.className = 'result hidden';
        resultContainer.id = `result-${index}`;

        questionContainer.appendChild(questionElement);
        questionContainer.appendChild(optionsContainer);
        questionContainer.appendChild(resultContainer);

        quizForm.appendChild(questionContainer);
    });

    // 提交按鈕事件處理
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', evaluateQuiz);

    function evaluateQuiz() {
        let score = 0;
        let unanswered = 0;
        const categoryErrors = {
            '工作內容': 0,
            '工作時間': 0,
            '面試準備': 0,
            '專業知識': 0,
            '公司福利': 0
        };

        // 分類題目
        const categories = {
            '工作內容': [0, 3, 16],
            '工作時間': [1, 6],
            '面試準備': [2, 4, 7, 9, 17, 19],
            '專業知識': [8, 10, 11, 13],
            '公司福利': [5, 12, 14, 15, 18]
        };

        quizData.forEach((questionData, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            const resultContainer = document.getElementById(`result-${index}`);
            resultContainer.classList.remove('hidden', 'correct', 'incorrect');
            resultContainer.innerHTML = '';

            // 檢查是否有回答
            if (!selectedOption) {
                unanswered++;
                resultContainer.classList.add('incorrect');
                resultContainer.innerHTML = `<p>未作答！</p><p class="explanation">正確答案：${questionData.options[questionData.correctAnswer]}</p><p class="explanation">${questionData.explanation}</p>`;
                return;
            }

            const selectedAnswer = parseInt(selectedOption.value);

            if (selectedAnswer === questionData.correctAnswer) {
                score++;
                resultContainer.classList.add('correct');
                resultContainer.innerHTML = `<p>正確！</p><p class="explanation">${questionData.explanation}</p>`;
            } else {
                resultContainer.classList.add('incorrect');
                resultContainer.innerHTML = `<p>錯誤！</p><p class="explanation">正確答案：${questionData.options[questionData.correctAnswer]}</p><p class="explanation">${questionData.explanation}</p>`;

                // 計算各類別錯誤數
                for (const category in categories) {
                    if (categories[category].includes(index)) {
                        categoryErrors[category]++;
                        break;
                    }
                }
            }
        });

        // 顯示分數和分析
        const scoreContainer = document.getElementById('score-container');
        const scoreDisplay = document.getElementById('score-display');
        const analysisDisplay = document.getElementById('analysis');

        scoreDisplay.textContent = `得分：${score} / ${quizData.length} (${Math.round(score/quizData.length*100)}%)`;

        // 生成分析報告
        let analysisHTML = '<h3>答題分析：</h3>';

        if (unanswered > 0) {
            analysisHTML += `<p>您有 ${unanswered} 題未作答，請確保回答所有問題。</p>`;
        }

        analysisHTML += '<h4>需要加強的領域：</h4><ul>';

        let hasWeakness = false;
        for (const category in categoryErrors) {
            const totalInCategory = categories[category].length;
            const errorRate = categoryErrors[category] / totalInCategory;

            if (errorRate > 0.5) {
                hasWeakness = true;
                analysisHTML += `<li><strong>${category}</strong>：錯誤率 ${Math.round(errorRate*100)}%，建議加強此領域的知識。</li>`;
            }
        }

        if (!hasWeakness) {
            analysisHTML += '<li>您在各領域的表現都不錯！</li>';
        }

        analysisHTML += '</ul>';

        if (score === quizData.length) {
            analysisHTML += '<p>恭喜您全部答對！您對日月光設備工程師的工作已有充分了解。</p>';
        } else if (score >= quizData.length * 0.8) {
            analysisHTML += '<p>您的表現很好！對日月光設備工程師的工作有良好的理解。</p>';
        } else if (score >= quizData.length * 0.6) {
            analysisHTML += '<p>您的表現尚可，但仍有改進空間。建議多了解日月光設備工程師的工作內容和要求。</p>';
        } else {
            analysisHTML += '<p>您對日月光設備工程師的了解還不夠充分，建議深入學習相關知識。</p>';
        }

        analysisDisplay.innerHTML = analysisHTML;
        scoreContainer.classList.remove('hidden');

        // 滾動到頁面頂部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
