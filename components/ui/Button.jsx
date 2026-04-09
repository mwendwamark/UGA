"use client";

import Link from "next/link";
import clsx from "clsx";
import styles from "./Button.module.css";

export function Button({
  href,
  variant,
  children,
  onClick,
  target,
  disabled,
  className,
}) {
  const classes = clsx(styles.btn, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

