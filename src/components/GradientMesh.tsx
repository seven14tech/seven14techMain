"use client";
import styles from "./GradientMesh.module.css";

/**
 * Cheap ambient gradient mesh — purely CSS-driven, no JS/RAF, no filters.
 * Pre-softened radial gradients give the "blur" look without the GPU cost.
 */
export default function GradientMesh() {
  return <div className={styles.mesh} aria-hidden="true" />;
}
