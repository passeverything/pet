import BookingForm from "./BookingForm";
import styles from "./page.module.css";

const services = [
  { icon: "洗", title: "基础洗护", text: "梳毛、沐浴、吹干、耳道清洁、脚底修毛和基础护理一次完成。" },
  { icon: "剪", title: "精修造型", text: "泰迪、比熊、博美、长毛猫等常见造型，可按脸型和毛量微调。" },
  { icon: "护", title: "皮毛护理", text: "针对换毛、打结、干燥和异味问题，提供温和护理和居家建议。" },
  { icon: "接", title: "接送到店", text: "3 公里内可预约接送，洗护完成后发送照片和护理记录。" }
];

const steps = [
  { number: "01", title: "预约建档", text: "记录品种、年龄、性格、过敏史和常用洗护偏好。" },
  { number: "02", title: "洗前检查", text: "查看皮肤、耳朵、指甲和打结位置，确认适合的护理方案。" },
  { number: "03", title: "分区洗护", text: "独立洗护台与消毒工具，按宠物状态调整水温和吹风强度。" },
  { number: "04", title: "交付反馈", text: "给主人同步照片、护理重点和下次洗护间隔建议。" }
];

const prices = [
  { title: "小型犬基础洗护", text: "适合 10kg 内短毛或中短毛犬。", price: "88", items: ["沐浴吹干", "耳道与眼周清洁", "脚底毛与指甲护理"] },
  { title: "猫咪舒缓洗护", text: "预约制安静时段，减少陌生环境刺激。", price: "158", items: ["温和洗护", "浮毛梳理", "洗后状态记录"] },
  { title: "精修造型套餐", text: "适合需要脸型、身体线条和四肢修剪的宠物。", price: "198", items: ["基础洗护全套", "造型沟通与修剪", "香氛护理可选"] }
];

const reviews = [
  { text: "我家狗很怕吹风，这次居然没有闹。店员会先安抚再慢慢吹，结束后毛很蓬松。", author: "边牧主人 林女士" },
  { text: "猫咪洗完有照片和状态反馈，指甲也修得很稳，整个过程比我想象中省心。", author: "英短主人 周先生" },
  { text: "造型不会剪得太夸张，会根据狗狗脸型修，回家之后家里人都说像换了个小朋友。", author: "比熊主人 陈女士" }
];

export default function Home() {
  return (
    <>
      <header className={styles.topbar}>
        <a className={styles.brand} href="#top" aria-label="毛球日记宠物洗护首页">
          <span className={styles.brandMark}>洗</span>
          <span>毛球日记</span>
        </a>
        <nav className={styles.nav} aria-label="页面导航">
          <a href="#services">洗护项目</a>
          <a href="#flow">到店流程</a>
          <a href="#pricing">套餐价格</a>
          <a href="#booking">立即预约</a>
        </nav>
        <a className={styles.button} href="#booking">预约洗护</a>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>宠物洗护 · 造型 · SPA 护理</p>
          <h1 className={styles.heroTitle}>让毛孩子干净、松软、自在回家</h1>
          <p>一店一宠分区护理，低刺激洗护用品，洗前皮毛检查与洗后护理建议都帮你准备好。</p>
          <div className={styles.heroActions}>
            <a className={styles.button} href="#booking">马上预约</a>
            <a className={`${styles.button} ${styles.secondary}`} href="#pricing">查看套餐</a>
          </div>
          <div className={styles.quickStats} aria-label="门店亮点">
            <div className={styles.stat}><strong>40+</strong><span>分钟基础洗护</span></div>
            <div className={styles.stat}><strong>1v1</strong><span>安抚式服务</span></div>
            <div className={styles.stat}><strong>8年</strong><span>主理人经验</span></div>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <img
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80"
            alt="宠物洗护店内小狗洗后擦干场景"
            className={styles.heroImage}
          />
          <div className={styles.heroBadge}>洗前评估皮肤状态，洗后记录毛发情况，适合怕水、敏感和第一次到店的小朋友。</div>
        </div>
      </section>

      <main>
        <section className={styles.services} id="services">
          <SectionHead title="店内服务" text="从日常清洁到精修造型，按宠物体型、毛量和性格安排护理节奏。" />
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.title}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.flow} id="flow">
          <SectionHead title="一次放心的洗护流程" text="减少等待和应激，让主人清楚知道每一步正在发生什么。" />
          <div className={styles.steps}>
            {steps.map((step) => (
              <div className={styles.step} key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.pricing} id="pricing">
          <SectionHead title="热门套餐" text="以下为常规体型参考价，实际以到店毛量、打结和护理项目为准。" />
          <div className={styles.priceGrid}>
            {prices.map((item) => (
              <article className={styles.priceCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className={styles.price}><span>￥</span><strong>{item.price}</strong><span>起</span></div>
                <ul>{item.items.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.reviews}>
          <SectionHead title="主人反馈" text="熟客喜欢这里的原因通常很简单：干净、准时、沟通清楚。" />
          <div className={styles.reviewGrid}>
            {reviews.map((review) => (
              <article className={styles.reviewCard} key={review.author}>
                <p>{review.text}</p>
                <strong>{review.author}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.bookingSection} id="booking">
          <div className={styles.booking}>
            <div>
              <h2>预约今天的干净小计划</h2>
              <p>留下基础信息，我们会在营业时间内与你确认具体到店时间。</p>
              <div className={styles.contactList}>
                <span>营业时间：10:00 - 20:00，周一店休</span>
                <span>门店地址：星河街 18 号 1 层</span>
                <span>预约电话：021-6688-1024</span>
              </div>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 毛球日记宠物洗护</span>
        <span>一宠一清洁 · 工具消毒 · 到店先评估</span>
      </footer>
    </>
  );
}

function SectionHead({ title, text }: { title: string; text: string }) {
  return (
    <div className={styles.sectionHead}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
