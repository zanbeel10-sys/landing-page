import { useState } from 'react';
import { ArrowLeft, ArrowUpLeft, Check, Menu, MessageCircle, PackageCheck, ShieldCheck, Sparkles, X } from 'lucide-react';

const WHATSAPP_DEMO_URL = 'https://wa.me/966500000000';
const INSTAGRAM_URL = 'https://www.instagram.com/';
const SNAPCHAT_URL = 'https://www.snapchat.com/';

const products = [
  {
    id: 'oud',
    name: 'سِرّ العود',
    notes: 'عود كمبودي · عنبر · لمسة جلد',
    description: 'حضور عميق ينساب بهدوء، ويترك أثراً لا يشبه سواه.',
    price: '٤٨٠',
    image: '/images/oud-perfume.png',
    badge: 'الأكثر طلباً',
  },
  {
    id: 'ward',
    name: 'وَرد الطائف',
    notes: 'ورد طائفي · مسك أبيض · فانيلا',
    description: 'رقة الورد حين تلتقي بدفء المسك في توقيع أنثوي خالد.',
    price: '٣٦٠',
    image: '/images/rose-perfume.png',
    badge: 'اختيار الموسم',
  },
  {
    id: 'amber',
    name: 'أثَر العنبر',
    notes: 'عنبر دافئ · زعفران · أخشاب',
    description: 'دفء يحيط بك من أول رشة، لليالٍ تستحق أن تُروى.',
    price: '٤٢٠',
    image: '/images/amber-perfume.png',
    badge: 'ثبات استثنائي',
  },
];

const reviews = [
  { quote: 'من أول رشة عرفت أني وجدت عطري. فخم، ثابت، وكل مرة ألبسه يسألوني عنه.', name: 'نورة العتيبي', city: 'الرياض', initials: 'ن' },
  { quote: 'سرّ العود صار جزءاً من حضوري. الرائحة متوازنة وفخامة العبوة تليق بالإهداء.', name: 'عبدالله الحربي', city: 'جدة', initials: 'ع' },
  { quote: 'وصلني بسرعة والتغليف كان تحفة. ورد الطائف أرقّ عطر اقتنيته منذ سنوات.', name: 'لمى السالم', city: 'الدمام', initials: 'ل' },
];

function inquiryUrl(message: string) {
  return `${WHATSAPP_DEMO_URL}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const review = reviews[activeReview];

  return (
    <div className="site-shell" dir="rtl">
      <div className="bg-[#29231b] px-4 py-2 text-center text-[11px] tracking-wide text-[#e8d9bc] sm:text-xs" data-testid="text-shipping-note">
        توصيل داخل المملكة <span className="mx-2 text-[#b59a6d]">·</span> تغليف يليق بهديتك
      </div>
      <header className="relative z-20 border-b border-[#ddd4c4] bg-[#f7f4ec]">
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3" aria-label="عطور النخبة، الصفحة الرئيسية" data-testid="link-home">
            <span className="flex h-10 w-10 items-center justify-center border border-[#a58a5e] text-[#715b37]">
              <span className="font-serif text-xl">ن</span>
            </span>
            <span className="leading-tight">
              <span className="block text-[19px] font-semibold tracking-tight">عطور النخبة</span>
              <span className="mt-1 block text-[9px] tracking-[.24em] text-[#897c67]" dir="ltr">ELITE PERFUMES</span>
            </span>
          </a>
          <nav className="hidden items-center gap-9 text-[13px] text-[#554b3c] md:flex" aria-label="التنقل الرئيسي">
            <a className="nav-link" href="#collection">عطورنا</a>
            <a className="nav-link" href="#story">حكايتنا</a>
            <a className="nav-link" href="#offers">العروض</a>
            <a className="nav-link" href="#testimonials">آراء عملائنا</a>
          </nav>
          <a href={inquiryUrl('مرحباً، أرغب بالاستفسار عن عطور النخبة.')} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 border border-[#806a47] px-5 py-3 text-xs font-semibold text-[#5b4930] transition-colors hover:bg-[#806a47] hover:text-white sm:flex" data-testid="link-header-order">
            تحدث معنا <ArrowLeft size={14} />
          </a>
          <button type="button" className="flex h-10 w-10 items-center justify-center border border-[#ddd4c4] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={menuOpen} data-testid="button-mobile-menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && <nav className="absolute inset-x-0 top-full border-b border-[#ddd4c4] bg-[#f7f4ec] px-6 py-4 shadow-lg md:hidden" aria-label="قائمة الهاتف">
          {[['عطورنا', '#collection'], ['حكايتنا', '#story'], ['العروض', '#offers'], ['آراء عملائنا', '#testimonials']].map(([label, href]) => <a key={href} href={href} className="block border-b border-[#e7dfd1] py-3 text-sm last:border-0" onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>}
      </header>

      <main>
        <section id="home" className="relative min-h-[610px] bg-[#e8e0d1] lg:min-h-[650px]" aria-labelledby="hero-title">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(90deg, rgba(31,25,18,.72) 0%, rgba(31,25,18,.46) 42%, rgba(31,25,18,.04) 100%), url('/images/hero-perfume.png')" }} role="img" aria-label="قارورة عطر فاخرة على قاعدة حجرية تحت ضوء الغروب" />
          <div dir="ltr" className="relative mx-auto flex min-h-[610px] max-w-[1320px] items-center justify-end px-6 py-16 lg:min-h-[650px] lg:px-12">
            <div dir="rtl" className="max-w-[540px] text-right text-[#fffaf0]">
              <div className="eyebrow mb-6 !text-[#dfc99f] reveal">عطور فاخرة في المملكة</div>
              <h1 id="hero-title" className="reveal reveal-delay text-[2.8rem] font-medium leading-[1.38] tracking-[-.055em] sm:text-6xl lg:text-[4.6rem]">
                لكل حضورٍ<br /><span className="text-[#d9c194]">حكاية تُروى.</span>
              </h1>
              <p className="reveal reveal-late mt-6 max-w-[410px] text-sm leading-8 text-[#f1e8d9] sm:text-base">
                عطور تعبّر عنك قبل أن تتحدث. نفحات عربية أصيلة، صُنعت لتبقى في الذاكرة وترافق أجمل لحظاتك.
              </p>
              <div className="reveal reveal-late mt-9 flex flex-wrap items-center gap-5">
                <a href={inquiryUrl('مرحباً، أرغب بطلب عطر من عطور النخبة.')} target="_blank" rel="noopener noreferrer" className="button-shine inline-flex items-center gap-7 bg-[#92764d] px-7 py-4 text-sm font-semibold text-[#fffaf0]" data-testid="link-hero-order">
                  اطلب الآن <ArrowLeft size={16} />
                </a>
                <a href="#collection" className="text-sm text-[#f4ead8] underline decoration-[#b9a277] underline-offset-8 transition-colors hover:text-white" data-testid="link-explore-products">اكتشف العطور</a>
              </div>
              <div className="mt-12 flex items-center gap-4 text-xs text-[#e8ddc9]">
                <span className="flex -space-x-2 space-x-reverse">
                  {['ن', 'ر', 'م'].map((letter, index) => <span key={letter} className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#473b2b] text-[#fff9ee] ${index === 0 ? 'bg-[#9f8965]' : index === 1 ? 'bg-[#88795e]' : 'bg-[#b59f78]'}`}>{letter}</span>)}
                </span>
                <span>نفحات تترك أثراً لا يُنسى</span>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 hidden items-center gap-3 text-[10px] tracking-[.25em] text-[#f0e4cf] lg:flex" dir="ltr">
              <span className="h-px w-12 bg-[#d6c39e]" /> MADE TO BE REMEMBERED
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-b border-[#ded5c5] bg-[#f2eee5] py-4">
          <div className="marquee-track flex w-max items-center gap-10 text-xs tracking-wide text-[#6b5b42]">
            {Array.from({ length: 2 }).map((_, loop) => <div key={loop} className="flex items-center gap-10" aria-hidden={loop === 1}>
              {['تركيبات مختارة بعناية', 'عبق يدوم طويلاً', 'بروح عربية', 'تفاصيل تليق بك'].map((text) => <span key={`${loop}-${text}`} className="flex items-center gap-10"><span>{text}</span><span className="text-[#b49a6b]">·</span></span>)}
            </div>)}
          </div>
        </div>

        <section id="collection" className="bg-[#f7f4ec] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-12 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
              <div>
                <span className="eyebrow ornament">مختاراتنا</span>
                <h2 className="section-title mt-4">عطرٌ يشبه حكايتك</h2>
              </div>
              <p className="max-w-[360px] text-sm leading-7 text-[#756b5c]">ثلاثة توقيعات عطرية، لكل منها روحها الخاصة. الأسماء والأسعار أمثلة توضيحية قابلة للتعديل.</p>
            </div>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <article key={product.id} className="product-card group" data-testid={`card-product-${product.id}`}>
                  <div className="relative aspect-[4/4.65] overflow-hidden bg-[#e8e0d3]">
                    <img src={product.image} alt={`قارورة عطر ${product.name} بتصميم فاخر`} width="800" height="1000" loading="lazy" className="product-image h-full w-full object-cover" />
                    <span className="absolute right-4 top-4 bg-[#f7f4ec]/90 px-3 py-2 text-[10px] tracking-wide text-[#715b37]">{product.badge}</span>
                    <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f4ec] text-[#715b37] transition-colors group-hover:bg-[#92764d] group-hover:text-white"><ArrowUpLeft size={18} /></span>
                  </div>
                  <div className="pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="mt-1.5 text-[11px] tracking-wide text-[#8a7655]">{product.notes}</p>
                      </div>
                      <div className="shrink-0 text-left">
                        <span className="text-lg font-medium">{product.price}</span>
                        <span className="mr-1 text-[11px] text-[#796e5d]">ر.س</span>
                      </div>
                    </div>
                    <p className="mt-4 min-h-[48px] text-sm leading-7 text-[#756b5c]">{product.description}</p>
                    <a href={inquiryUrl(`مرحباً، أرغب بطلب عطر ${product.name} بسعر ${product.price} ريال.`)} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-between border-t border-[#ddd4c4] pt-4 text-sm font-semibold text-[#5c4930] transition-colors hover:text-[#9a7a48]" data-testid={`link-order-${product.id}`}>
                      اطلب الآن <ArrowLeft size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="bg-[#eae4d8] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div className="relative mx-auto w-full max-w-[470px]">
              <div className="aspect-[1.1/1] overflow-hidden bg-[#d9cfbd]">
                <img src="/images/oud-perfume.png" alt="تفاصيل عطر سِرّ العود على حجر طبيعي" loading="lazy" width="800" height="900" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-3 border border-[#a68e66] bg-[#eae4d8] px-5 py-4 text-center sm:-left-5">
                <span className="block font-serif text-2xl text-[#715b37]">نخبة</span>
                <span className="text-[10px] text-[#756b5c]">توقيع يليق بك</span>
              </div>
            </div>
            <div className="lg:pr-10">
              <span className="eyebrow ornament">من أرضنا، إلى حضورك</span>
              <h2 className="section-title mt-5 max-w-[530px]">نؤمن أن العطر<br />أكثر من رائحة.</h2>
              <p className="mt-6 max-w-[520px] text-sm leading-8 text-[#6e6455]">
                هو ذكرى تعود، وانطباع يبقى، وتفصيل صغير يصنع فرقاً كبيراً. في عطور النخبة نمزج أجود المكونات مع ذائقة عربية تعرف قيمة الأثر.
              </p>
              <div className="mt-8 grid max-w-[520px] grid-cols-2 gap-x-6 gap-y-5 border-t border-[#d3c7b3] pt-6">
                {[['خبرة في اختيار النفحات', 'من أجود مصادر العالم'], ['تركيز يدوم', 'تركيبات غنية ومتوازنة']].map(([title, sub]) => <div key={title} className="flex gap-3"><Check size={17} className="mt-1 shrink-0 text-[#92764d]" /><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-xs text-[#827665]">{sub}</p></div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section aria-label="مزايا عطور النخبة" className="bg-[#f7f4ec] px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1240px] divide-y divide-[#ddd4c4] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-x-reverse">
            {[
              { icon: Sparkles, title: 'جودة تُحسّ', copy: 'مكونات منتقاة بعناية وتركيز يمنح عطرك ثباتاً يليق بك.' },
              { icon: ShieldCheck, title: 'فخامة في كل تفصيل', copy: 'من توليفة العطر إلى تغليفه، كل تفصيل يحمل توقيع النخبة.' },
              { icon: PackageCheck, title: 'توصيل يطمئنك', copy: 'شحن آمن إلى بابك داخل المملكة، مع عناية خاصة بطلبك.' },
            ].map(({ icon: Icon, title, copy }) => <div key={title} className="flex gap-5 px-5 py-7 first:pr-0 last:pl-0 sm:flex-col sm:px-8 sm:py-2">
              <Icon className="mt-1 shrink-0 text-[#92764d] sm:mb-1" size={25} strokeWidth={1.4} />
              <div><h3 className="text-base font-semibold">{title}</h3><p className="mt-2 max-w-[290px] text-xs leading-6 text-[#786e5e]">{copy}</p></div>
            </div>)}
          </div>
        </section>

        <section id="offers" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="offer-pattern relative mx-auto max-w-[1240px] overflow-hidden bg-[#2d2921] px-7 py-12 text-[#f7f0e3] sm:px-12 sm:py-16 lg:px-20">
            <div className="absolute -left-16 -top-24 h-64 w-64 rounded-full border border-[#8f7953]/35" />
            <div className="absolute -left-8 -top-16 h-48 w-48 rounded-full border border-[#8f7953]/25" />
            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-[590px]">
                <span className="eyebrow !text-[#c6ae80]">عرض توضيحي قابل للتعديل</span>
                <h2 className="mt-4 text-3xl font-medium leading-relaxed tracking-tight sm:text-4xl">اجعل مناسبتهم<br className="sm:hidden" /> أكثر عطراً.</h2>
                <p className="mt-3 max-w-[450px] text-sm leading-7 text-[#d3c9b7]">اشترِ أي عطرين، واحصل على تغليف هدايا فاخر مجاناً. لأن بعض المشاعر تستحق أن تُهدى بأجمل صورة.</p>
                <p className="mt-5 text-xs text-[#c4ad81]">العرض ساري لفترة محدودة على جميع مختاراتنا</p>
              </div>
              <a href={inquiryUrl('مرحباً، أرغب بالاستفادة من عرض عطرين مع تغليف هدايا فاخر مجاناً.')} target="_blank" rel="noopener noreferrer" className="button-shine inline-flex w-fit shrink-0 items-center gap-7 bg-[#a58a5e] px-6 py-4 text-sm font-semibold text-white" data-testid="link-offer-order">استفد من العرض <ArrowLeft size={16} /></a>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-[#eae4d8] px-5 py-20 text-center sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[760px]">
            <span className="eyebrow ornament">نماذج آراء قابلة للاستبدال</span>
            <h2 className="section-title mt-4">أثرٌ يتحدث عن نفسه</h2>
            <div className="mt-10 min-h-[230px] border-y border-[#d2c5ae] px-3 py-9 sm:px-10">
              <div className="mb-5 text-xs tracking-[.15em] text-[#9e8356]" aria-label="تقييم خمس من خمس">تقييم ٥ من ٥</div>
              <blockquote className="mx-auto max-w-[620px] text-lg leading-[2] text-[#443c30] sm:text-xl" data-testid="text-customer-review">«{review.quote}»</blockquote>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b7a581] text-sm text-[#725c3a]">{review.initials}</span>
                <div className="text-right"><p className="text-xs font-semibold">{review.name}</p><p className="mt-1 text-[10px] text-[#847967]">{review.city} · رأي توضيحي</p></div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button type="button" onClick={() => setActiveReview((activeReview + reviews.length - 1) % reviews.length)} className="flex h-10 w-10 items-center justify-center border border-[#c9bba4] transition-colors hover:bg-[#d8cfbf]" aria-label="التقييم السابق" data-testid="button-previous-review"><ArrowLeft size={16} /></button>
              <span className="text-xs tabular-nums text-[#7a6c56]">{String(activeReview + 1).padStart(2, '0')} <span className="mx-1 text-[#b8a582]">/</span> {String(reviews.length).padStart(2, '0')}</span>
              <button type="button" onClick={() => setActiveReview((activeReview + 1) % reviews.length)} className="flex h-10 w-10 items-center justify-center border border-[#c9bba4] transition-colors hover:bg-[#d8cfbf]" aria-label="التقييم التالي" data-testid="button-next-review"><ArrowLeft className="rotate-180" size={16} /></button>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ec] px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 border-b border-[#ddd4c4] pb-14 sm:flex-row sm:items-center">
            <div>
              <span className="eyebrow">نحن هنا لأجلك</span>
              <h2 className="mt-3 text-2xl font-medium sm:text-3xl">اختر عطرك على مهل.</h2>
              <p className="mt-2 text-sm text-[#786e5e]">يسعدنا أن نساعدك في العثور على الرائحة التي تشبهك.</p>
            </div>
            <a href={inquiryUrl('مرحباً، أحتاج مساعدتكم في اختيار العطر المناسب لي.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-[#806a47] px-6 py-4 text-sm font-semibold text-[#5b4930] transition-colors hover:bg-[#806a47] hover:text-white" data-testid="link-whatsapp-contact"><MessageCircle size={17} /> تواصل عبر واتساب <ArrowLeft size={15} /></a>
          </div>
        </section>
      </main>

      <footer className="bg-[#29251f] px-5 pb-7 pt-12 text-[#f1eadc] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 border-b border-[#50483a] pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_1fr]">
            <div>
              <a href="#home" className="inline-flex items-center gap-3" data-testid="link-footer-home">
                <span className="flex h-10 w-10 items-center justify-center border border-[#a58a5e] text-[#d7c194]"><span className="font-serif text-xl">ن</span></span>
                <span><span className="block text-lg font-semibold">عطور النخبة</span><span className="mt-1 block text-[9px] tracking-[.24em] text-[#ad9b7d]" dir="ltr">ELITE PERFUMES</span></span>
              </a>
              <p className="mt-5 max-w-[330px] text-xs leading-7 text-[#bdb3a1]">عطور سعودية تحمل أصالة الحكاية العربية، وتترك في كل مكان تمرّ به أثراً لا يُنسى.</p>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-[#d7c194]">روابط سريعة</h2>
              <div className="flex flex-col items-start gap-3 text-xs text-[#c8bead]">
                <a href="#collection" className="transition-colors hover:text-white">تشكيلة العطور</a><a href="#story" className="transition-colors hover:text-white">حكايتنا</a><a href="#offers" className="transition-colors hover:text-white">العروض والهدايا</a><a href="#testimonials" className="transition-colors hover:text-white">آراء العملاء</a>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-[#d7c194]">يسعدنا تواصلك</h2>
              <p className="text-xs text-[#c8bead]">المملكة العربية السعودية</p>
              <a href={inquiryUrl('مرحباً، أرغب بالتواصل مع خدمة عملاء عطور النخبة.')} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-xs text-[#c8bead] transition-colors hover:text-white" data-testid="link-footer-whatsapp"><MessageCircle size={14} /> تواصل عبر واتساب</a>
              <p className="mt-3 text-[10px] leading-5 text-[#938875]">رابط واتساب تجريبي قابل للتعديل:<br /><span dir="ltr" className="font-mono">https://wa.me/966500000000</span></p>
              <div className="mt-4 flex gap-4 text-xs text-[#d6c8ad]"><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white" data-testid="link-social-instagram">إنستغرام</a><a href={SNAPCHAT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white" data-testid="link-social-snapchat">سناب شات</a></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-5 text-[10px] text-[#958b79] sm:flex-row sm:items-center sm:justify-between">
            <p>© ٢٠٢٦ عطور النخبة. جميع الحقوق محفوظة.</p>
            <p>صُنع بعناية في المملكة العربية السعودية</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
