"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

export default function BookingForm() {
  const [note, setNote] = useState("提交后不会离开当前页面。");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() || "主人";

    setNote(`${name}，预约信息已记录，我们会尽快联系你确认时间。`);
    form.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        主人姓名
        <input name="name" type="text" placeholder="例如：小林" required />
      </label>
      <label className={styles.label}>
        联系电话
        <input name="phone" type="tel" placeholder="手机号码" required />
      </label>
      <label className={styles.label}>
        宠物类型
        <select name="pet" required defaultValue="">
          <option value="">请选择</option>
          <option>小型犬</option>
          <option>中大型犬</option>
          <option>猫咪</option>
          <option>其他</option>
        </select>
      </label>
      <label className={styles.label}>
        预约项目
        <select name="service" required defaultValue="">
          <option value="">请选择</option>
          <option>基础洗护</option>
          <option>精修造型</option>
          <option>皮毛护理</option>
          <option>接送到店</option>
        </select>
      </label>
      <label className={`${styles.label} ${styles.full}`}>
        备注
        <textarea
          name="message"
          placeholder="可以写宠物名字、体重、是否怕水或打结情况"
        />
      </label>
      <div className={styles.formActions}>
        <button className={styles.button} type="submit">
          提交预约
        </button>
        <span className={styles.formNote}>{note}</span>
      </div>
    </form>
  );
}
