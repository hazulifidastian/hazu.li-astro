---
layout: ../../layouts/CheatsheetLayout.astro
title: Tmux
---

# Tmux

## Manajemen dasar

- `tmux new -s kerja`  
  Membuat sesi baru dengan nama `kerja`.
- `tmux ls`  
  Melihat semua sesi yang sedang tersedia.
- `tmux attach -t kerja`  
  Masuk kembali ke sesi yang sudah ada.

## Saat sudah berada di dalam tmux

- `prefix d`  
  Detach tanpa menghentikan proses di dalam sesi.

## Window

- `prefix c`  
  Membuat window baru di sesi aktif.
- `prefix n`  
  Berpindah ke window setelah window aktif.

## Pane

- `prefix %`  
  Membagi pane menjadi kiri dan kanan.
- `prefix "`  
  Membagi pane menjadi atas dan bawah.
- `prefix arrow-key`  
  Berpindah fokus ke pane arah terkait.
