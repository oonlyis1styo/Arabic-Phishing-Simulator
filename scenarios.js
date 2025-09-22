    /***********
     * SCENARIOS
     * (Keep expanding this array in future.)
     ***********/
    const allScenarios = [
    {
      type: "Email",
      from: "أمازون مصر <orders@amazon.com.eg>",
      subject: "تأكيد طلبك - رقم الطلب: 186215",
      body: "مرحبًا [اسم العميل],\nشكرًا لك على طلبك من أمازون!\nنحن نود إعلامك أن طلبك رقم 186215 قد تم تأكيده بنجاح.\nتفاصيل الطلب:\n- المنتج: جهاز iPhone 16\n- السعر: 48,000 جنيه\n- العنوان: 123 شارع النيل، القاهرة\n\nيمكنك متابعة حالة طلبك وتفاصيله عبر الرابط التالي:\n(https://www.amazon.com.eg/gp/your-account/order-details?orderID=186215)\n\nإذا كانت لديك أي أسئلة أو تحتاج إلى المساعدة، لا تتردد في التواصل معنا عبر قسم الدعم.\nشكرًا لاختيارك أمازون!",
      isPhishing: false,
      why: "الدومين الخاص بـ 'أمازون' صحيح (amazon.com.eg) ويحتوي على رابط رسمي لمتابعة الطلب."
    },
    {
      type: "Email",
      from: "Noon Egypt <support@noon.com>",
      subject: "عرض خاص! خصومات تصل إلى 70% في مهرجان التخفيضات",
      body: "مرحبًا [اسم العميل],\nنحن في Noon نعلن عن مهرجان التخفيضات الكبير!\nاستمتع بخصومات تصل إلى 70% على مجموعة مختارة من المنتجات.\nلا تفوت الفرصة، التحديثات الجديدة في العروض ستتم كل ساعة.\n\nزوروا موقعنا الآن واكتشفوا أفضل العروض:\n(https://www.noon.com/egypt-ar/)\n\nسارعوا، العروض سارية لفترة محدودة فقط!\nشكرًا لاختياركم Noon.",
      isPhishing: false,
      why: "الدومين الخاص بـ 'Noon' صحيح (noon.com) والرابط يوجه المستخدم إلى الموقع الرسمي لشركة Noon."
    },
    {
      type: "Email",
      from: "أمازون مصر <support@amazon.com.eg>",
      subject: "طلبك قيد الانتظار - رقم الطلب: 26895",
      body: "عزيزي العميل، نود إعلامك أن طلبك رقم 26895 لم يتم تأكيده بعد. لتأكيد الطلب أو لتعديل تفاصيله، يرجى زيارة الرابط التالي: [http://amazon-eg-shop.com/confirm].",
      isPhishing: true,
      why: "الرابط لا يعود لموقع أمازون الرسمي، وهذه محاولة لإعادة توجيهك إلى موقع مزيف."
    },

    {
      type: "SMS",
      from: "شركة الشحن السريع",
      subject: "",
      body: "عميلنا العزيز، شحنتك رقم 7412 وصلت إلى مركز التوزيع في القاهرة.\nللمزيد من التفاصيل أو إعادة تحديد موعد التسليم، اتصل بنا على الرقم 19019.\nشكرًا لاختيارك خدماتنا.",
      isPhishing: false,
      why: "الرسالة تحتوي على رقم شحنة ورقم هاتف رسمي لخدمة العملاء، وهي تتبع الطريقة المعتادة لشركات الشحن."
    },
    {
      type: "SMS",
      from: "جوائز اليوم",
      subject: "",
      body: "مبروك! فزت بـ 5000 جنيه كاش! فقط اضغط على الرابط لاستلام جائزتك: http://claim-your-prize-now.com\nالعرض ساري لوقت محدود.",
      isPhishing: true,
      why: "اللينك غير رسمي وطلب الجوائز من رسائل مجهولة يعتبر محاولة احتيال. لا توجد مسابقات موثوقة بهذه الطريقة."
    },
    {
      type: "Email",
      from: "CIB Egypt <e-statements@cibeg.com>",
      subject: "تنبيه: كشف حساب بطاقتك الائتمانية متاح الآن",
      body: "عميلنا العزيز،\nنود إعلامك بأن كشف حساب بطاقتك الائتمانية لشهر سبتمبر 2025 أصبح متاحًا الآن من خلال خدمة الإنترنت البنكي.\nيرجى تسجيل الدخول إلى حسابك عبر الرابط الرسمي:\nhttps://www.cibeg.com\nنذكّرك بسداد الحد الأدنى المستحق قبل 25 سبتمبر 2025 لتجنب أي رسوم تأخير.\nشكرًا لاستخدامك خدماتنا.\nالبنك التجاري الدولي - CIB.",
      isPhishing: false,
      why: "- المرسل من نطاق رسمي تابع للبنك (@cibeg.com)\n- الرابط يشير إلى الموقع الرسمي للبنك (https://www.cibeg.com)\n- لا يُطلب من المستخدم إدخال معلومات حساسة مباشرة من البريد\n- صياغة احترافية بدون لهجة استعجالية أو تهديدية"
    },
    {
      type: "Email",
      from: "البنك العربي <support@arabeebank-login.com>",
      subject: "تأكيد تحديث حسابك البنكي",
      body: "عميلنا العزيز،\nلقد قمنا بتحديث بيانات حسابك البنكي. لضمان استمرارية الخدمة، يرجى تأكيد بياناتك من خلال الرابط التالي:\n(http://arabeebank-login.com/update-info)\nسيتم تعليق حسابك إذا لم تتم العملية في غضون 24 ساعة.\nشكرًا لك.",
      isPhishing: true,
      why: "الدومين ليس الرسمي للبنك (arabeebank-login.com) وطلب البيانات الحساسة عبر رابط مشبوه يعد محاولة احتيال."
    },
    {
      type: "Call",
      from: "رقم غير مسجل",
      subject: "",
      body: "مرحبًا، معك من البنك الأهلي المصري. نحتاج إلى تأكيد بعض المعلومات الخاصة بحسابك البنكي. من فضلك، قم بتوفير رقم البطاقة ورمز التحقق.",
      isPhishing: true,
      why: "البنوك لا تطلب معلومات حساسة عبر المكالمات الهاتفية. هذا الأسلوب يعد من أساليب الاحتيال."
    },
    {
      type: "SMS",
      from: "فودافون",
      subject: "",
      body: "مبروك كسبت 500 ميجابايت هدية عشان شحنت. كلم #1* خلال 24 ساعة عشان تستفيد بالهدية. شكرا لاختيارك فودافون.",
      isPhishing: false,
      why: "الرسالة تحتوي على عرض حقيقي من فودافون ولا تحتوي على روابط مشبوهة أو طلبات بيانات شخصية."
    },
    {
      type: "SMS",
      from: "اتصالات",
      subject: "",
      body: "مرحبًا! تم تحديث خطك بخدمة جديدة. يرجى تأكيد بياناتك للحصول على الخدمة عبر الرابط التالي: etisalat-verify-eg.com/confirm.",
      isPhishing: true,
      why: "الرابط غير رسمي ولا يعود للموقع الرسمي لشركة اتصالات، وطلب تأكيد البيانات هو أسلوب احتيالي لجمع معلومات حساسة."
    },
    {
      type: "Call",
      from: "شركة فودافون",
      subject: "",
      body: "مرحبًا، هذه مكالمة من خدمة العملاء في فودافون. نود إبلاغك بأن هناك خصومات جديدة على باقات الإنترنت التي قد تهمك. هل ترغب في معرفة المزيد؟",
      isPhishing: false,
      why: "هذه مكالمة تسويقية مشروعة من شركة معروفة تقدم عرضًا لخصومات، دون طلب معلومات شخصية."
    },
    {
      type: "Email",
      from: "جوجل <no-reply@google.com>",
      subject: "تنبيه أمني لحساب جوجل الخاص بك",
      body: "لقد اكتشفنا تسجيل دخول جديد إلى حساب جوجل الخاص بك من جهاز جديد. إذا كنت أنت من قام بتسجيل الدخول، يمكنك تجاهل هذه الرسالة. إذا لم تكن أنت، يرجى مراجعة إعدادات الأمان الخاصة بك هنا: https://myaccount.google.com/security.",
      isPhishing: false,
      why: "الرسالة قادمة من الدومين الرسمي لجوجل، والرابط يحتوي على صفحة الأمان الخاصة بحساب جوجل."
    },
    {
      type: "Email",
      from: "دعم جوجل <support@google-services.xyz>",
      subject: "مهم: تم تعليق حسابك على جوجل",
      body: "تم تعليق حسابك على جوجل مؤقتًا بسبب نشاط مشبوه. لاستعادة حسابك، يرجى التحقق من بياناتك هنا: https://google-support-verification.com/restore.",
      isPhishing: true,
      why: "الرسالة قادمة من دومين مشبوه (google-services.xyz) والرابط يؤدي إلى موقع غير رسمي. جوجل لا تطلب التحقق من البيانات عبر روابط مشبوهة."
    },
    {
      type: "Email",
      from: "Facebook Notifications <notification@facebookmail.com>",
      subject: "تحديث جديد لخصوصية حسابك على فيسبوك",
      body: "مرحبًا،\nقمنا بتحديث إعدادات الخصوصية الخاصة بك لحماية حسابك بشكل أفضل. يرجى مراجعة إعداداتك من خلال حسابك الرسمي على فيسبوك عبر الرابط التالي:\nhttps://www.facebook.com/settings\nشكرًا لاستخدامك فيسبوك.",
      isPhishing: false,
      why: "- المرسل من نطاق رسمي (facebookmail.com)\n- الرابط رسمي ويقود إلى الموقع الرسمي لفيسبوك\n- لا يطلب أي بيانات حساسة\n- الرسالة مهنية ولا تحاول إثارة الخوف أو التعجيل"
    },
    {
      type: "SMS",
      from: "WhatsApp",
      subject: "",
      body: "مبروك! ربحت جائزة 1000 دولار على WhatsApp. لاستلام الجائزة، اضغط على الرابط التالي وادخل بياناتك: http://whatsapp-prize-win.com",
      isPhishing: true,
      why: "الرابط غير رسمي ويطلب بيانات حساسة، الرسالة تحاول استدراج المستخدم بجائزة وهمية، ولا توجد رسائل جوائز حقيقية بهذه الطريقة."
    },
    {
      type: "Email",
      from: "Facebook Support <support@faceb00k-secure.com>",
      subject: "تنبيه أمني: تم قفل حسابك مؤقتًا",
      body: "عميلنا العزيز،\nلقد لاحظنا نشاطًا غير معتادًا على حسابك. يرجى تأكيد هويتك لتجنب الإيقاف الدائم للحساب عبر الرابط:\nhttp://faceb00k-secure.com/verify\nشكراً لتعاونك.",
      isPhishing: true,
      why: "الدومين مزيف (faceb00k-secure.com) يشبه فيسبوك لكنه غير رسمي، ويطلب بيانات حساسة عبر رابط مشبوه، وتهديد بإيقاف الحساب يحاول خلق توتر للمستخدم."
    },
    {
      type: "SMS",
      from: "HR Recruitment",
      subject: "",
      body: "شكراً لتقديمك لوظيفة المحاسبة بشركة النيل. يرجى الحضور لمقر الشركة يوم الخميس 22 سبتمبر الساعة 3 مساءً. للرد: 0128540079",
      isPhishing: false,
      why: "- الرسالة صادرة من جهة توظيف معروفة\n- لا تحتوي على روابط مشبوهة\n- تطلب فقط تأكيد الحضور ولا تطلب معلومات حساسة"
    },
    {
      type: "Email",
      from: "وظائف سريعة <jobs@quickhire-secure.com>",
      subject: "مقابلة عمل عاجلة - تأكيد بياناتك الآن",
      body: "عميلنا العزيز،\nلقد تم قبول طلبك لوظيفة مدير مبيعات. يرجى تحديث بياناتك الشخصية وإرسال نسخة من هويتك عبر الرابط التالي لتأكيد المقابلة:\nhttp://quickhire-secure.com/verify\nالرجاء إتمام العملية خلال 24 ساعة لتجنب إلغاء الطلب.",
      isPhishing: true,
      why: "الدومين مزيف (quickhire-secure.com)، يطلب بيانات شخصية وحساسة عبر رابط مشبوه، تستخدم أسلوب استعجال لإجبار المستخدم على الاستجابة."
    },
    {
      type: "email",
      from: "hr@tagned-recruitment.com",
      subject: "فرصة توظيف مميزة في شركة كبرى بالقاهرة الجديدة",
      body: "حضرتك مؤهل تشتغل معانا؟\nإحنا بنوظف دلوقتي في شركة كبيرة في مجال الاستثمار العقاري في التجمع الخامس، وفتحنا تقديم لوظائف جديدة للشباب والبنات.\n\n الوظائف المتاحة:\n- خدمة عملاء\n- سكرتارية تنفيذية\n- مشرف إداري\n\n المرتب يبدأ من ٢٠٠٠٠ جنيه وبيزيد حسب المقابلة.\n شيفت صباحي من ٩ ص لـ ٥ م.\n تأمين طبي واجتماعي بعد أول شهر.\n\nلو مهتم، كل اللي عليك تملأ الاستمارة دي:\nhttps://forms.gle/apply-now-eg\n\n مطلوب تكتب البيانات بدقة:\n- الاسم الرباعي\n- الرقم القومي\n- صورة البطاقة (اختياري)\n- رقم الحساب البنكي أو فودافون كاش\n- اسم الأم الكامل (لأغراض التحقق الأمني)\n\nالمقابلات هتبدأ من بكرة، فالأولوية للي يملوا البيانات النهارده.\n\nلو عندك أي استفسار، ابعتلنا على الإيميل أو رقم الواتساب الموضح في الفورم.\n\nمع تمنياتنا بالتوفيق \nفريق التوظيف - HR Cairo Jobs",
      isPhishing: true,
      why: "الرسالة بتطلب بيانات شخصية حساسة زي الرقم القومي، حساب بنكي، واسم الأم، وده غير مبرر. كمان الرابط المستخدم هو Google Form بدون تأكيد رسمي من شركة معروفة، واللغة فيها استعجال وضغط زائف لجذب الضحية."
    },
    {
      type: "Email",
      from: "وزارة الداخلية <support@moi.gov.eg>",
      subject: "تحديث بيانات جواز السفر",
      body: "عزيزي المواطن، نود إعلامك بأن الموعد النهائي لتجديد جواز سفرك قد اقترب. يمكنك الآن التقديم للحصول على جواز السفر الجديد عبر الموقع الرسمي لوزارة الداخلية. للبدء في العملية، يرجى زيارة الرابط التالي: [https://moi.gov.eg] ملاحظة: يرجى التأكد من تقديم الطلب في الوقت المحدد لتجنب أي تأخير.",
      isPhishing: false,
      why: "الرسالة من بريد رسمي تابع للحكومة المصرية، والموقع الإلكتروني هو الرابط الرسمي للوزارة."
    },
    {
      type: "Email",
      from: "جامعة القاهرة <admissions@cu.edu.eg>",
      subject: "تأكيد التسجيل في برنامج الماجستير للعام الدراسي 2025",
      body: "عزيزي الطالب،\nنشكرك على التسجيل في برنامج الماجستير للعام الدراسي 2025-2026. يرجى مراجعة بيانات التسجيل والتأكد من دفع الرسوم قبل 30 سبتمبر 2025.\nلمزيد من التفاصيل، قم بتسجيل الدخول إلى بوابة الطلاب: https://portal.cu.edu.eg\nنتمنى لك التوفيق.",
      isPhishing: false,
      why: "- المرسل من نطاق رسمي للجامعة (@cu.edu.eg)\n- الرابط رسمي وآمن\n- لا يطلب إدخال معلومات حساسة عبر البريد\n- صياغة رسمية ومهنية"
    },
    {
      type: "Email",
      from: "منح دراسية <scholarships@free-edu-grants.com>",
      subject: "فرصة منحة دراسية محدودة - أكمل طلبك الآن",
      body: "عزيزي الطالب،\nتهانينا! تم اختيارك للحصول على منحة دراسية كاملة. يرجى إدخال بياناتك الشخصية وتحميل صورة بطاقة الهوية عبر الرابط التالي:\nhttp://free-edu-grants.com/apply\nيرجى إكمال الطلب خلال 24 ساعة لتجنب فقدان المنحة.",
      isPhishing: true,
      why: "الدومين مزيف وغير رسمي (free-edu-grants.com)، يطلب معلومات شخصية وحساسة، استخدام أسلوب استعجال وحافز كاذب."
    },
    {
      type: "Email",
      from: "دعم مايكروسوفت <support@microsoft.com>",
      subject: "تحديث أمان مهم لنظام ويندوز الخاص بك",
      body: "عزيزي المستخدم،\n\nنود إعلامك بأنه تم إصدار تحديث أمني مهم لنظام تشغيل ويندوز الذي تستخدمه. هذا التحديث يعالج ثغرات قد تؤثر على أمان جهازك ويضمن استقرار الأداء.\n\nيرجى متابعة الخطوات التالية لتثبيت التحديث:\n1. افتح إعدادات النظام.\n2. اختر 'تحديثات ويندوز'.\n3. اضغط على 'التحقق من وجود تحديثات'.\n4. قم بتنزيل وتثبيت التحديثات المتوفرة.\n\nإذا واجهت أي مشكلة أثناء التثبيت، لا تتردد في التواصل معنا عبر مركز الدعم الفني على الرابط التالي: https://support.microsoft.com\n\nشكراً لاستخدامك منتجات مايكروسوفت.",
      isPhishing: false,
      why: "- المرسل من نطاق رسمي (microsoft.com)\n- لا يطلب النقر على روابط مشبوهة أو إدخال بيانات حساسة\n- الرسالة واضحة ومفصلة، توجه المستخدم لإجراءات رسمية\n- لا توجد تهديدات أو استعجالات غير طبيعية"
    },
    {
      type: "Email",
      from: "دعم فني مايكروسوفت <security-update@microsoft-supports.com>",
      subject: "تنبيه عاجل: اكتشاف فيروس على جهازك - تحتاج لتحديث فوراً",
      body: "عميلنا العزيز،\n\nلقد اكتشف نظامنا وجود فيروسات وبرمجيات خبيثة تحاول التأثير على جهازك.\nللحفاظ على بياناتك وتأمين جهازك، يرجى الضغط على الرابط أدناه لتنزيل أداة إزالة الفيروسات وتحديث الأمان فوراً:\nhttp://microsoft-supports.com/scan\n\nيرجى عدم تجاهل هذا التنبيه لتجنب فقدان البيانات أو تعطيل الجهاز.\n\nشكراً لتعاونك،\nفريق الدعم الفني لمايكروسوفت.",
      isPhishing: true,
      why: "الدومين مزيف (microsoft-supports.com) غير تابع لمايكروسوفت، الطلب بتحميل أداة عبر رابط مشبوه، استخدام أسلوب استعجال وتهديد زائف لجذب المستخدم."
    },
    {
      type: "SMS",
      from: "Apple Support",
      subject: "",
      body: "تنبيه أمني: تم اكتشاف محاولات تسجيل دخول غير مصرح بها إلى حساب Apple ID الخاص بك. إذا لم تكن أنت، يرجى زيارة https://appleid.apple.com لمراجعة أمان الحساب وتحديث كلمة المرور فوراً.",
      isPhishing: false,
      why: "- الرسالة من مصدر موثوق\n- الرابط رسمي (appleid.apple.com)\n- تحث المستخدم على مراجعة أمان حسابه بطريقة مهنية بدون تهديد مباشر"
    },
    {
      type: "Email",
      from: "الهلال الأحمر المصري <info@egyptianredcrescent.org>",
      subject: "دعوة للمشاركة في حملة دعم المتضررين من الفيضانات",
      body: "السلام عليكم ورحمة الله وبركاته،\n\nيسر الهلال الأحمر المصري دعوتكم للمساهمة في حملة دعم المتضررين من الفيضانات الأخيرة في محافظات مصر.\nيمكنكم التبرع بسهولة وآمان من خلال زيارة الموقع الرسمي عبر الرابط التالي:\nhttps://www.egyptianredcrescent.org/donate\n\nكل مساهمة تصنع فرقًا في حياة المحتاجين.\nجزاكم الله خيرًا على دعمكم المستمر.\n\nالهلال الأحمر المصري",
      isPhishing: false,
      why: "- البريد من نطاق رسمي موثق (@egyptianredcrescent.org)\n- الرابط رسمي وآمن\n- لا يطلب بيانات حساسة أو معلومات بنكية عبر البريد\n- صياغة مهنية وواضحة بدون ضغط أو تهديد"
    },
    {
      type: "Email",
      from: "جمعية الإغاثة الطارئة <donations@emergencyhelp-now.com>",
      subject: "عاجل: نداء تبرع لإنقاذ الأرواح",
      body: "عزيزي المتبرع،\n\nنتوجه إليك بنداء عاجل للمساعدة في دعم المتضررين من الكوارث الطبيعية.\nيرجى التبرع فورًا عبر الرابط التالي لتوفير المساعدة الفورية:\nhttp://emergencyhelp-now.com/donate\n\nلا تتأخر، فالحياة في خطر!\n\nشكراً لتعاونكم.\nفريق جمعية الإغاثة الطارئة.",
      isPhishing: true,
      why: "الدومين مزيف وغير رسمي (emergencyhelp-now.com)، يضغط على المستلم بالتبرع الفوري، الرابط قد يؤدي إلى سرقة بيانات أو أموال، لا يتبع معايير التواصل الرسمية."
    },
    {
      type: "Email",
      from: "أخوك كريم <kareem@example.com>",
      subject: "مساعدة بسيطة لو سمحت",
      body: "السلام عليكم يا أخويا العزيز،\nأنا كنت مسافر برا الفترة اللي فاتت، بس بسبب ظرف صحي طارئ ماقدرتش أرجع لحد دلوقتي. محتاج شوية فلوس عشان أغطي مصاريف علاج هنا، ولو تقدر تساعدني بحاجة صغيرة أكون ممتن جداً. هارجعلك الفلوس أول ما أوصل.\nشكراً ليك على تفهمك ودعمك المستمر.\nتحياتي،\nكريم",
      isPhishing: false,
      why: "- الرسالة مكتوبة بلغة طبيعية ومحترمة\n- مفيهاش طلبات مستعجلة أو روابط مشبوهة\n- التفاصيل واضحة وواقعية\n- المرسل معروف والبريد رسمي"
    },
    {
      type: "SMS",
      from: "أخوك محمد",
      subject: "",
      body: "يا أخي، حصلت لي مشكلة كبيرة دلوقتي وعايز 5000 جنيه فوراً عشان مصاريف مستشفى طارئة. متقولش لحد ولا تبعتلي رسالة، بس ابعتلي الفلوس بسرعة! الرسالة دي بعتهالك ولأكتر من حد عشان الموضوع خطير جداً.",
      isPhishing: true,
      why: "- الرسالة بتدي إحساس بالضغط والاستعجال\n- طلب فلوس كبير ومفاجئ\n- بتأكد إنها اتبعتت لأكتر من شخص في العيلة (محاولة احتيال جماعية)\n- مفيش إمكانية تحقق أو تواصل واضح"
    },
    {
      type: "Call",
      from: "أمك",
      subject: "",
      body: "الأم: السلام عليكم يا حبيبي، عامل ايه؟\nأنت: وعليكم السلام، الحمد لله، وانتي؟\nالأم: والله يا حبيبي، أبوك تعب فجأة واضطرينا نوديّه المستشفى، والمصاريف طالعة غالية شوية.\nأنت: ربنا يشفيه، حاله عامل ايه دلوقتي؟\nالأم: الحمد لله بيتحسن، بس لسه محتاجين ندفع حوالي 6000 جنيه للعلاج. تقدر تساعدنا؟\nأنت: أكيد يا ماما، هشوفلك الفلوس وأبعتها لك على طول.\nالأم: ربنا يخليك يا حبيبي، مش عارفه اشكرك ازاي.",
      isPhishing: false,
      why: "- لغة بسيطة وطبيعية\n- محتوى شخصي بحت\n- لا فيه تهديد أو استعجال\n- لا يطلب بيانات حساسة ولا روابط"
    },
    {
      type: "Call",
      from: "أخوك",
      subject: "",
      body: "المتصل: السلام عليكم، معاك سامي.\nأنت: سامي؟ في ايه؟\nالمتصل: والله يا أخي، انا في ورطة كبيرة، عندي ديون كتير وهدخل السجن لو ما دفعتش 10,000 جنيه النهاردة.\nأنت: جربت تتكلم مع البنك أو المحامي؟\nالمتصل: حاولت بس مفيش حل سريع، كلمتك عشان الموضوع مستعجل جداً.\nأنت: ممكن أبعتلك إزاي؟\nالمتصل: أبعت الفلوس على الحساب ده دلوقتي، ضروري جداً.\nأنت: ...\nالمتصل: بالله عليك، ما تسيبنيش في الموقف ده.",
      isPhishing: true,
      why: "- لغة فيها ضغط واستعجال\n- الطلب لفلوس كبيرة فجأة\n- بيأكد انه بعت الرسالة لأكتر من حد في العيلة (محاولة احتيال جماعية)\n- لا يسمح بالتحقق من الموقف"
    },
    {
      type: "Email",
      from: "delivery@aramex-eg.net",
      subject: "الشحنة الخاصة بك متوقفة في الجمارك",
      body: "عزيزي العميل،\nتم إيقاف شحنتك رقم 921387 في الجمارك المصرية.\nمطلوب دفع رسوم جمركية قدرها 65 جنيه لتأكيد التسليم.\nادخل على الرابط التالي لإتمام الدفع باستخدام بطاقة البنك:\nhttps://aramex-eg-customs.net\nفي حال عدم الدفع خلال 48 ساعة سيتم إعادة الشحنة.\nشكراً لاستخدامك أرامكس.",
      isPhishing: true,
      why: "الرابط مش تابع لأرامكس الرسمية، وفيه طلب لبيانات الدفع بطريقة مش آمنة. اللغة فيها استعجال وغموض حوالين تفاصيل الشحنة."
    },
    {
      type: "SMS",
      from: "AlAhlyBank",
      subject: "تنبيه أمني هام",
      body: "عميلنا العزيز،\nحسابك في البنك الأهلي معرض للإيقاف بسبب عدم تحديث البيانات.\nبرجاء الدخول فوراً على الرابط التالي لتحديث بياناتك:\nhttps://alahly-update-info.com\nلتفادي إيقاف حسابك خلال ٢٤ ساعة.\nشكراً لتعاونك.",
      isPhishing: true,
      why: "الرابط مش رسمي وموقع البنك الحقيقي مختلف. بيستخدم لغة تهديد بالإيقاف لخلق حالة استعجال، وبيطلب الدخول على لينك خارجي مجهول."
    },
    {
      type: "Whatsapp",
      from: "+20 101 555 6677",
      subject: "دعم فني من شركة Orange",
      body: "السلام عليكم، مع حضرتك أحمد من فريق الدعم الفني لأورنج.\nإحنا لاحظنا إن في مشكلة في خطك وقد تؤدي لفصل الخدمة.\nمحتاجين نعمل تحديث سريع للخط من خلال الكود اللي هيوصلك في رسالة دلوقتي، برجاء تبعته هنا.\nشكراً لتعاونك.",
      isPhishing: true,
      why: "الشركة مش بتتواصل من أرقام شخصية ولا بتطلب أكواد OTP على واتساب. الرسالة بتحاول تخدع المستخدم بطريقة مقنعة لكنها تصيّد واضح."
    },
    {
      type: "Whatsapp",
      from: "+20 120 456 7890",
      subject: "تأكيد عنوان شحنة من جوميا",
      body: "أهلاً وسهلاً، معاك محمد من شركة الشحن الخاصة بجوميا.\nمعايا طرد باسم حضرتك، وكنت محتاج أتأكد من العنوان قبل التوصيل:\nمدينة نصر، شارع أحمد الزمر، عمارة ٥، الدور الثالث؟\nلو فيه أي تعديل، ياريت تبعته.\nوالتوصيل هيكون خلال ساعتين.",
      isPhishing: false,
      why: "الرسالة من رقم مصري واضح، مفيهاش طلب معلومات حساسة أو روابط. الموظف بيسأل عن العنوان فقط، ومش بيضغط على المستخدم يعمل إجراء غير معتاد."
    },
    {
      type: "Whatsapp",
      from: "+20 115 003 7788",
      subject: "مراجعة بيانات بطاقة الرقم القومي",
      body: "وزارة الداخلية المصرية بتحدث بيانات بطاقات الرقم القومي.\nبرجاء إرسال صورة البطاقة الأمامية والخلفية وصورة شخصية حديثة على هذا الرقم لتفادي إيقاف البطاقة.\nالرجاء الرد خلال ٢٤ ساعة.",
      isPhishing: true,
      why: "الوزارة لا تطلب بيانات رسمية أو صور بطاقة عبر واتساب أو أرقام شخصية. الرسالة بتستغل الخوف من إيقاف البطاقة وبتطلب بيانات حساسة بدون تحقق."
    },
    {
      type: "Whatsapp",
      from: "+20 101 998 7755",
      subject: "تحذير من تعليق حساب فوري",
      body: "مع حضرتك كريم من فوري.\nلاحظنا وجود نشاط غير معتاد على حسابك.\nمحتاجين تأكيد بعض البيانات لتفادي وقف الحساب:\n- صورة البطاقة\n- رقم المحفظة\n- آخر ٤ أرقام من البطاقة البنكية\nيُرجى الرد فوراً خلال 30 دقيقة.\nشكراً لتعاونك.",
      isPhishing: true,
      why: "فوري لا تتواصل عبر واتساب لطلب بيانات حساسة زي صورة البطاقة أو بيانات الحساب البنكي، والرسالة دي استغلال واضح للثقة في الجهة."
    },
    {
      type: "SMS",
      from: "NBE",
       subject: "إشعار بتسجيل دخول",
      body: "تم تسجيل دخول جديد لحسابك البنكي من تطبيق NBE Mobile.\nلو لم تقم بهذه العملية، يُرجى الاتصال فوراً على 19623.\nيرجى عدم مشاركة كلمة السر أو الكود مع أي شخص.\nالبنك الأهلي المصري.",
      isPhishing: false,
      why: "الرسالة جايه من مصدر رسمي ومعروفة، ومفيهاش روابط أو طلبات مريبة. بتشجع العميل يتصل بالبنك مباشرة وبتحذره من مشاركة أي بيانات."
    },
    {
      type: "SMS",
      from: "DeliveryExpress",
      subject: "تم تعليق شحنتك",
      body: "عزيزي العميل، تم تعليق شحنتك لعدم اكتمال البيانات.\nلإعادة جدولة التوصيل، ادخل على:\nhttps://delivery-eg-check.com\nسيتم إلغاء الطلب خلال 12 ساعة إذا لم يتم الرد.",
      isPhishing: true,
      why: "الرابط مزيف، واسم الشركة غير معروف أو رسمي. الرسالة غامضة بدون رقم طلب أو تفاصيل شحنة، وفيها استعجال لإجبار الضحية يتصرف بسرعة."
    },
    {
      type: "sms",
      from: "WE",
      subject: "رصيدك قرب يخلص",
      body: "عميلنا العزيز، استهلاكك من باقة الإنترنت وصل إلى 90٪.\nلشحن باقة إضافية، استخدم تطبيق My WE أو كلم #999*.\nشكراً لاستخدامك WE.",
      isPhishing: false,
      why: "رسالة واضحة ومباشرة من جهة معروفة (WE)، ومفيهاش روابط، وبتوجه العميل لقنوات رسمية للشحن. مفيهاش أي محاولة تصيّد."    
    },
    {
      type: "notification",
      from: "Google Play",
      subject: "تحديث أمني مهم للتطبيقات المثبتة",
      body: "في تحديث أمني مهم لبعض التطبيقات المثبتة على جهازك.\nبرجاء التأكد من تثبيت آخر إصدار من خلال Google Play لحماية بياناتك.\nافتح Google Play > My Apps > Update All.",
      isPhishing: false,
      why: "الرسالة جايه من مصدر رسمي، ومفيش فيها أي روابط خارجية. بتوجه المستخدم مباشرة لـ Google Play بدون ما تطلب تحميل يدوي لأي ملف."
    },
    {
      type: "Call",
      from: "+20 109 333 1122",
      subject: "تحديث بيانات حسابك البنكي",
      body: "ألو، مع حضرتك محمد من خدمة عملاء البنك الأهلي. في تحديث جديد للبيانات محتاجين نطبّقه على حسابك. هل ممكن تقولي الكود اللي وصلك في الرسالة حالاً؟",
      isPhishing: true,
      why: "موظفي البنك الحقيقيين عمرهم ما بيطلبوا كود الـOTP أو أي بيانات حساسة عبر المكالمات. المكالمة دي محاولة واضحة للاستيلاء على حسابك البنكي."
    },
    {
      type: "Call",
      from: "Orange Customer Service",
      subject: "استطلاع رأي بعد استخدام الخدمة",
      body: "أهلاً بحضرتك، مع حضرتك سارة من خدمة عملاء أورنج. حابين نعرف رأيك في جودة الشبكة خلال الفترة اللي فاتت، هل ممكن تجاوب على ٣ أسئلة سريعة؟",
      isPhishing: false,
      why: "المكالمة حقيقية وبتتم من خلال رقم خدمة عملاء معروف، ومفيهاش أي طلب لبيانات شخصية أو حساسة. هدفها استطلاع رأي مش أكثر."
    },
    {
      type: "Call",
      from: "+20 115 442 9988",
      subject: "مبروك! كسبت جايزة من برنامج شعبي",
      body: "المتصل: ألو، معاك عمر من فريق جوائز برنامج \"الناس بتتكلم\".\nأنت: ألو، نعم؟\nالمتصل: انت كسبت جايزة ٧٠٠٠ جنيه، واحنا بنبعتها للعملاء المحظوظين.\nأنت: بس أنا مش فاكر إني شاركت في أي مسابقة.\nالمتصل: ما تشيلش هم، ده برنامج بيختار ناس بشكل عشوائي من قائمة المشاهدين.\nأنت: طيب، هتطلب مني إيه عشان أستلم الجايزة؟\nالمتصل: بس لازم تأكد رقم بطاقتك وإرسال الكود اللي هيجيلك عشان نضمن إنك صاحب الخط.\nأنت: الكود ده منين؟\nالمتصل: هيجيلك في رسالة فوراً، أبعتها لي.\nأنت: لا، مش هدي أي حاجة.\nالمتصل: خسارة عليك الفرصة، مع السلامة.",
      isPhishing: true,
      why: "المتصل بيحاول يخدع عن طريق فكرة الجايزة، وبيطلب كود تأكيد من رسالة خاصة، وده أسلوب واضح لسرقة الحسابات أو المحفظة."
    },
    {
      type: "Email",
      from: "delivery@aramex-eg.net",
      subject: "الشحنة الخاصة بك متوقفة في الجمارك",
      body: "عزيزي العميل،\nتم إيقاف شحنتك رقم 921387 في الجمارك المصرية.\nمطلوب دفع رسوم جمركية قدرها 65 جنيه لتأكيد التسليم.\nادخل على الرابط التالي لإتمام الدفع باستخدام بطاقة البنك:\nhttps://aramex-eg-customs.net\nفي حال عدم الدفع خلال 48 ساعة سيتم إعادة الشحنة.\nشكراً لاستخدامك أرامكس.",
      isPhishing: true,
      why: "الرابط مش تابع لأرامكس الرسمية، وفيه طلب لبيانات الدفع بطريقة مش آمنة. اللغة فيها استعجال وغموض حوالين تفاصيل الشحنة."
    },
    {
      type: "SMS",
      from: "AlAhlyBank",
      subject: "تنبيه أمني هام",
      body: "عميلنا العزيز،\nحسابك في البنك الأهلي معرض للإيقاف بسبب عدم تحديث البيانات.\nبرجاء الدخول فوراً على الرابط التالي لتحديث بياناتك:\nhttps://alahly-update-info.com\nلتفادي إيقاف حسابك خلال ٢٤ ساعة.\nشكراً لتعاونك.",
      isPhishing: true,
      why: "الرابط مش رسمي وموقع البنك الحقيقي مختلف. بيستخدم لغة تهديد بالإيقاف لخلق حالة استعجال، وبيطلب الدخول على لينك خارجي مجهول."
    },
    {
      type: "Whatsapp",
      from: "+20 101 555 6677",
      subject: "دعم فني من شركة Orange",
      body: "السلام عليكم، مع حضرتك أحمد من فريق الدعم الفني لأورنج.\nإحنا لاحظنا إن في مشكلة في خطك وقد تؤدي لفصل الخدمة.\nمحتاجين نعمل تحديث سريع للخط من خلال الكود اللي هيوصلك في رسالة دلوقتي، برجاء تبعته هنا.\nشكراً لتعاونك.",
      isPhishing: true,
      why: "الشركة مش بتتواصل من أرقام شخصية ولا بتطلب أكواد OTP على واتساب. الرسالة بتحاول تخدع المستخدم بطريقة مقنعة لكنها تصيّد واضح."
    },
    {
      type: "Whatsapp",
      from: "+20 120 456 7890",
      subject: "تأكيد عنوان شحنة من جوميا",
      body: "أهلاً وسهلاً، معاك محمد من شركة الشحن الخاصة بجوميا.\nمعايا طرد باسم حضرتك، وكنت محتاج أتأكد من العنوان قبل التوصيل:\nمدينة نصر، شارع أحمد الزمر، عمارة ٥، الدور الثالث؟\nلو فيه أي تعديل، ياريت تبعته.\nوالتوصيل هيكون خلال ساعتين.",
      isPhishing: false,
      why: "الرسالة من رقم مصري واضح، مفيهاش طلب معلومات حساسة أو روابط. الموظف بيسأل عن العنوان فقط، ومش بيضغط على المستخدم يعمل إجراء غير معتاد."
    },
    {
      type: "Whatsapp",
      from: "+20 115 003 7788",
      subject: "مراجعة بيانات بطاقة الرقم القومي",
      body: "وزارة الداخلية المصرية بتحدث بيانات بطاقات الرقم القومي.\nبرجاء إرسال صورة البطاقة الأمامية والخلفية وصورة شخصية حديثة على هذا الرقم لتفادي إيقاف البطاقة.\nالرجاء الرد خلال ٢٤ ساعة.",
      isPhishing: true,
      why: "الوزارة لا تطلب بيانات رسمية أو صور بطاقة عبر واتساب أو أرقام شخصية. الرسالة بتستغل الخوف من إيقاف البطاقة وبتطلب بيانات حساسة بدون تحقق."
    },
    {
      type: "Whatsapp",
      from: "+20 101 998 7755",
      subject: "تحذير من تعليق حساب فوري",
      body: "مع حضرتك كريم من فوري.\nلاحظنا وجود نشاط غير معتاد على حسابك.\nمحتاجين تأكيد بعض البيانات لتفادي وقف الحساب:\n- صورة البطاقة\n- رقم المحفظة\n- آخر ٤ أرقام من البطاقة البنكية\nيُرجى الرد فوراً خلال 30 دقيقة.\nشكراً لتعاونك.",
      isPhishing: true,
      why: "فوري لا تتواصل عبر واتساب لطلب بيانات حساسة زي صورة البطاقة أو بيانات الحساب البنكي، والرسالة دي استغلال واضح للثقة في الجهة."
    },
    {
      type: "SMS",
      from: "NBE",
      subject: "إشعار بتسجيل دخول",
      body: "تم تسجيل دخول جديد لحسابك البنكي من تطبيق NBE Mobile.\nلو لم تقم بهذه العملية، يُرجى الاتصال فوراً على 19623.\nيرجى عدم مشاركة كلمة السر أو الكود مع أي شخص.\nالبنك الأهلي المصري.",
      isPhishing: false,
      why: "الرسالة جايه من مصدر رسمي ومعروفة، ومفيهاش روابط أو طلبات مريبة. بتشجع العميل يتصل بالبنك مباشرة وبتحذره من مشاركة أي بيانات."
    },
    {
      type: "SMS",
      from: "DeliveryExpress",
      subject: "تم تعليق شحنتك",
      body: "عزيزي العميل، تم تعليق شحنتك لعدم اكتمال البيانات.\nلإعادة جدولة التوصيل، ادخل على:\nhttps://delivery-eg-check.com\nسيتم إلغاء الطلب خلال 12 ساعة إذا لم يتم الرد.",
      isPhishing: true,
      why: "الرابط مزيف، واسم الشركة غير معروف أو رسمي. الرسالة غامضة بدون رقم طلب أو تفاصيل شحنة, وفيها استعجال لإجبار الضحية يتصرف بسرعة."
    },
    {
      type: "sms",
      from: "WE",
      subject: "رصيدك قرب يخلص",
      body: "عميلنا العزيز، استهلاكك من باقة الإنترنت وصل إلى 90٪.\nلشحن باقة إضافية، استخدم تطبيق My WE أو كلم #999*.\nشكراً لاستخدامك WE.",
      isPhishing: false,
      why: "رسالة واضحة ومباشرة من جهة معروفة (WE)، ومفيهاش روابط، وبتوجه العميل لقنوات رسمية للشحن. مفيهاش أي محاولة تصيّد."
    },
    {
      type: "notification",
      from: "Google Play",
      subject: "تحديث أمني مهم للتطبيقات المثبتة",
      body: "في تحديث أمني مهم لبعض التطبيقات المثبتة على جهازك.\nبرجاء التأكد من تثبيت آخر إصدار من خلال Google Play لحماية بياناتك.\nافتح Google Play > My Apps > Update All.",
      isPhishing: false,
      why: "الرسالة جايه من مصدر رسمي، ومفيش فيها أي روابط خارجية. بتوجه المستخدم مباشرة لـ Google Play بدون ما تطلب تحميل يدوي لأي ملف."
    },
    {
      type: "Call",
      from: "+20 109 333 1122",
      subject: "تحديث بيانات حسابك البنكي",
      body: "ألو، مع حضرتك محمد من خدمة عملاء البنك الأهلي. في تحديث جديد للبيانات محتاجين نطبّقه على حسابك. هل ممكن تقولي الكود اللي وصلك في الرسالة حالاً؟",
      isPhishing: true,
      why: "موظفي البنك الحقيقيين عمرهم ما بيطلبوا كود الـOTP أو أي بيانات حساسة عبر المكالمات. المكالمة دي محاولة واضحة للاستيلاء على حسابك البنكي."
    },
    {
      type: "Call",
      from: "Orange Customer Service",
      subject: "استطلاع رأي بعد استخدام الخدمة",
      body: "أهلاً بحضرتك، مع حضرتك سارة من خدمة عملاء أورنج. حابين نعرف رأيك في جودة الشبكة خلال الفترة اللي فاتت، هل ممكن تجاوب على ٣ أسئلة سريعة؟",
      isPhishing: false,
      why: "المكالمة حقيقية وبتتم من خلال رقم خدمة عملاء معروف، ومفيهاش أي طلب لبيانات شخصية أو حساسة. هدفها استطلاع رأي مش أكثر."
    },
    {
      type: "Call",
      from: "+20 115 442 9988",
      subject: "مبروك! كسبت جايزة من برنامج شعبي",
      body: "المتصل: ألو، معاك عمر من فريق جوائز برنامج \"الناس بتتكلم\".\nأنت: ألو، نعم؟\nالمتصل: انت كسبت جايزة ٧٠٠٠ جنيه، واحنا بنبعتها للعملاء المحظوظين.\nأنت: بس أنا مش فاكر إني شاركت في أي مسابقة.\nالمتصل: ما تشيلش هم، ده برنامج بيختار ناس بشكل عشوائي من قائمة المشاهدين.\nأنت: طيب، هتطلب مني إيه عشان أستلم الجايزة؟\nالمتصل: بس لازم تأكد رقم بطاقتك وإرسال الكود اللي هيجيلك عشان نضمن إنك صاحب الخط.\nأنت: الكود ده منين؟\nالمتصل: هيجيلك في رسالة فوراً، أبعتها لي.\nأنت: ........\nالمتصل: بسرعة يا فندم عشان الجايزة متروحش عليك.",
      isPhishing: true,
      why: "المتصل بيحاول يخدع عن طريق فكرة الجايزة، وبيطلب كود تأكيد من رسالة خاصة، وده أسلوب واضح لسرقة الحسابات أو المحفظة."
    }
    ];
/* scenarios.js
   Core quiz + Review Mistakes flow
*/

/***********
 * CONFIG
 ***********/
const TOTAL_QUESTIONS = 10;
const REQUIRED_REAL = 4;
const REQUIRED_PHISH = 6;

/***********
 * STATE
 ***********/
let pool = [];
let current = 0;
let score = 0;
let mistakes = [];       // indices in pool that were answered incorrectly
let reviewing = false;
let reviewList = [];     // cloned indices to step through during review
let reviewPos = 0;

/***********
 * UI refs (null-safe)
 ***********/
const $ = id => document.getElementById(id);
const mFrom = $('mFrom');
const mType = $('mType');
const mBody = $('mBody');
const mUrl  = $('mUrl');
const progressText = $('progressText');
const scoreText = $('scoreText');
const scoreBadge = $('scoreBadge');
const phishCount = $('phishCount');
const realCount = $('realCount');
const progressFill = $('progressFill');

const legitBtn = $('legitBtn');
const fakeBtn  = $('fakeBtn');
const nextBtn  = $('nextBtn');
const showScoreBtn = $('showScoreBtn');
const restartBtn = $('restartBtn');
const reviewBtn = $('reviewBtn');

const feedback = $('feedback');
const resultTitle = $('resultTitle');
const resultExplain = $('resultExplain');

/***********
 * Utilities
 ***********/
function shuffleArr(a){
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function pickRandomSubset(arr, n){
  if (!Array.isArray(arr)) return [];
  if (n <= 0) return [];
  if (n >= arr.length) return arr.slice();
  const copy = arr.slice(); shuffleArr(copy); return copy.slice(0, n);
}

function buildPool(){
  if (typeof allScenarios === 'undefined' || !Array.isArray(allScenarios)) {
    console.error('allScenarios is missing or not an array.');
    pool = [];
    return;
  }
  const phishPool = allScenarios.filter(s => s.isPhishing);
  const realPool = allScenarios.filter(s => !s.isPhishing);

  const pickedPhish = pickRandomSubset(phishPool, Math.min(REQUIRED_PHISH, phishPool.length));
  const pickedReal  = pickRandomSubset(realPool, Math.min(REQUIRED_REAL, realPool.length));

  let combined = pickedPhish.concat(pickedReal);

  if (combined.length < TOTAL_QUESTIONS) {
    const remaining = allScenarios.filter(s => !combined.includes(s));
    const need = TOTAL_QUESTIONS - combined.length;
    combined = combined.concat(pickRandomSubset(remaining, Math.min(need, remaining.length)));
  }

  pool = shuffleArr(combined).slice(0, TOTAL_QUESTIONS);
}

/***********
 * Rendering
 ***********/
function renderScenario(index){
  const s = pool[index];
  if (!s) {
    if (mBody) mBody.textContent = 'لا يوجد سيناريوهات لعرضها.';
    return;
  }

  if (mFrom) mFrom.textContent = s.from || '—';
  if (mType) mType.textContent = s.type || '—';

  let body = '';
  if (s.subject && s.subject.trim() !== '') body += 'الموضوع: ' + s.subject + '\n\n';
  body += s.body || '';
  if (mBody) mBody.textContent = body;

  const urlCandidate = (s.body||'').match(/https?:\/\/[^\s)]+/);
  if (mUrl) {
    if (urlCandidate) { mUrl.style.display = 'block'; mUrl.textContent = urlCandidate[0]; }
    else { mUrl.style.display = 'none'; mUrl.textContent = ''; }
  }

  if (progressText) progressText.textContent = `${index+1} / ${pool.length}`;
  if (scoreText) scoreText.textContent = `النقاط: ${score}`;
  if (scoreBadge) scoreBadge.textContent = `${score} / ${pool.length}`;
  if (phishCount) phishCount.textContent = pool.filter(x=>x.isPhishing).length;
  if (realCount) realCount.textContent = pool.filter(x=>!x.isPhishing).length;
  if (progressFill) {
    if (reviewing) {
      // Keep full bar during review mode
      progressFill.style.width = '100%';
    } else {
      // Normal progress
      progressFill.style.width =
        `${Math.round(((index)/Math.max(pool.length,1))*100)}%`;
    }
  }

  // reset feedback & button visibility for normal rendering
  if (feedback) { feedback.className = 'feedback'; feedback.style.display = 'none'; }
  if (resultTitle) resultTitle.textContent = '';
  if (resultExplain) resultExplain.textContent = '';
  if (nextBtn) nextBtn.style.display = 'none';
  if (showScoreBtn) showScoreBtn.style.display = 'none';
  if (restartBtn) restartBtn.style.display = 'none';

  // enable/disable answer buttons depending on mode
  if (!reviewing) {
    if (legitBtn) {
      legitBtn.disabled = false;
      legitBtn.style.display = 'inline-block';
    }
    if (fakeBtn) {
      fakeBtn.disabled = false;
      fakeBtn.style.display = 'inline-block';
    }
  } else {
    if (legitBtn) {
      legitBtn.disabled = true;
      legitBtn.style.display = 'none'; // hide in review mode
    }
    if (fakeBtn) {
      fakeBtn.disabled = true;
      fakeBtn.style.display = 'none'; // hide in review mode
    }
    // when in review mode we want next button to be available to step through mistakes
    if (nextBtn) nextBtn.style.display = 'inline-block';
  }
}

function showFeedback(isCorrect, s){
  if (feedback) feedback.style.display = 'flex';
  if (resultExplain) resultExplain.textContent = s.why || '';
  if (isCorrect) {
    if (feedback) feedback.className = 'feedback good show';
    if (resultTitle) resultTitle.textContent = '✅ إجابتك صحيحة';
  } else {
    if (feedback) feedback.className = 'feedback bad show';
    if (resultTitle) resultTitle.textContent = '❌ إجابتك خاطئة';
  }

  if (current < pool.length - 1) {
    if (nextBtn) nextBtn.style.display = 'inline-block';
  } else {
    if (showScoreBtn) showScoreBtn.style.display = 'inline-block';
  }

  if (legitBtn) legitBtn.disabled = true;
  if (fakeBtn) fakeBtn.disabled = true;
}

/***********
 * Answer handling
 ***********/
function answer(userSaysLegit){
  if (reviewing) return; // ignore accidental answers during review
  const s = pool[current];
  if (!s) return;
  const correct = (userSaysLegit && !s.isPhishing) || (!userSaysLegit && s.isPhishing);
  if (correct) score += 1;
  else {
    if (!mistakes.includes(current)) mistakes.push(current);
  }
  showFeedback(correct, s);
  if (scoreText) scoreText.textContent = `النقاط: ${score}`;
  if (scoreBadge) scoreBadge.textContent = `${score} / ${pool.length}`;
}

if (legitBtn) legitBtn.addEventListener('click', ()=> answer(true));
if (fakeBtn) fakeBtn.addEventListener('click', ()=> answer(false));

/***********
 * Next button - handles both normal forward and review forward
 ***********/
if (nextBtn) nextBtn.addEventListener('click', () => {
  if (reviewing) {
    // step through mistaken indices only
    if (reviewPos < reviewList.length - 1) {
      reviewPos++;
      const idx = reviewList[reviewPos];
      renderScenario(idx);
      if (feedback) { feedback.style.display = 'flex'; feedback.className = 'feedback final show'; }
      if (resultTitle) resultTitle.textContent = '';
      if (resultExplain) resultExplain.textContent = pool[idx].why || '';
    } else {
      finishReviewMode();
    }
    return;
  }

  // normal mode
  if (current < pool.length - 1) {
    current++;
    renderScenario(current);
  } else {
    showScore();
  }
});

/***********
 * showScore -> show final score + Review button (if mistakes exist)
 ***********/
function showScore(){
  if (feedback) { feedback.style.display = 'flex'; feedback.className = 'feedback final show'; }
  if (resultTitle) resultTitle.textContent = `🎉 نتيجتك: ${score} / ${pool.length}`;
  const missed = mistakes.length;
  if (resultExplain) resultExplain.textContent = `أخطاء: ${missed} — راجع الأخطاء لتحسين مهاراتك.`;
  if (showScoreBtn) showScoreBtn.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'none';
  if (restartBtn) restartBtn.style.display = 'inline-block';
  if (progressFill) progressFill.style.width = '100%';
  if (legitBtn) legitBtn.disabled = true;
  if (fakeBtn) fakeBtn.disabled = true;

  // show review button only if there are mistakes
  if (reviewBtn) {
    reviewBtn.style.display = mistakes.length > 0 ? 'inline-block' : 'none';
  }
}
if (showScoreBtn) showScoreBtn.addEventListener('click', showScore);

/***********
 * Review mistakes: enter review mode
 ***********/
if (reviewBtn) {
  reviewBtn.addEventListener('click', () => {
    if (!mistakes || mistakes.length === 0) {
      if (feedback) { feedback.style.display = 'flex'; feedback.className = 'feedback good show'; }
      if (resultTitle) resultTitle.textContent = 'مفيش أي أخطاء تراجعها 👌';
      if (resultExplain) resultExplain.textContent = '';
      return;
    }

    // Setup review mode
    reviewing = true;
    reviewList = mistakes.slice(); // clone indices
    reviewPos = 0;

    // UI changes for review
    if (restartBtn) restartBtn.style.display = 'none';
    if (showScoreBtn) showScoreBtn.style.display = 'none';
    if (reviewBtn) reviewBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'inline-block';
    if (legitBtn) {
      legitBtn.disabled = true;
      legitBtn.style.display = 'none'; // hide
    }
    if (fakeBtn) {
      fakeBtn.disabled = true;
      fakeBtn.style.display = 'none'; // hide
    }

    // show first mistaken scenario + explanation
    const idx = reviewList[0];
    renderScenario(idx);
    if (feedback) { feedback.style.display = 'flex'; feedback.className = 'feedback final show'; }
    if (resultTitle) resultTitle.textContent = '';
    if (resultExplain) resultExplain.textContent = pool[idx].why || '';
  });
}

function finishReviewMode() {
  reviewing = false;
  reviewList = [];
  reviewPos = 0;

  if (feedback) { feedback.style.display = 'flex'; feedback.className = 'feedback final show'; }
  if (resultTitle) resultTitle.textContent = 'انتهت مراجعة الأخطاء ✅';
  if (resultExplain) resultExplain.textContent = '';

  if (restartBtn) restartBtn.style.display = 'inline-block';
  if (nextBtn) nextBtn.style.display = 'none';
  if (reviewBtn) reviewBtn.style.display = mistakes.length > 0 ? 'inline-block' : 'none';

  // show answer buttons again but disabled until restart
  if (legitBtn) {
    legitBtn.style.display = 'inline-block';
    legitBtn.disabled = true;
  }
  if (fakeBtn) {
    fakeBtn.style.display = 'inline-block';
    fakeBtn.disabled = true;
  }
}

/***********
 * Restart / init
 ***********/
if (restartBtn) restartBtn.addEventListener('click', initRun);

function initRun(){
  current = 0;
  score = 0;
  mistakes = [];
  reviewing = false;
  reviewList = [];
  reviewPos = 0;

  if (reviewBtn) reviewBtn.style.display = 'none';
  if (feedback) feedback.style.display = 'none';
  if (resultTitle) resultTitle.textContent = '';
  if (resultExplain) resultExplain.textContent = '';

  // ensure answer buttons visible & enabled for new run
  if (legitBtn) {
    legitBtn.style.display = 'inline-block';
    legitBtn.disabled = false;
  }
  if (fakeBtn) {
    fakeBtn.style.display = 'inline-block';
    fakeBtn.disabled = false;
  }

  if (nextBtn) nextBtn.style.display = 'none';
  if (showScoreBtn) showScoreBtn.style.display = 'none';
  if (restartBtn) restartBtn.style.display = 'none';

  buildPool();
  renderScenario(current);
}

/***********
 * Keyboard shortcuts
 ***********/
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key === '4') { if (fakeBtn && !fakeBtn.disabled) fakeBtn.click(); }
  if (e.key === 'ArrowRight' || e.key === '6') { if (legitBtn && !legitBtn.disabled) legitBtn.click(); }
  if (e.key === ' ') {
    if (nextBtn && nextBtn.style.display !== 'none') nextBtn.click();
  }
});

/***********
 * Start
 ***********/
initRun();

// safe hook for homepage button if present
const homeBtn = $('return_to_homepage');
if (homeBtn) homeBtn.addEventListener('click', () => { window.location.href = 'homepage.html'; });

window.addEventListener('load', () => {
  document.body.classList.add('fade-in');
});
