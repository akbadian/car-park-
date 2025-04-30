## 👥 How to Make This a Group Project with GitHub

This guide assumes **you already have a GitHub account** and your project is ready locally.

---

### ✅ 1. Create a GitHub Repository

1. Go to [https://github.com](https://github.com).
2. Click **New repository**.
3. Name it `car-dealership`.
4. **Don’t** initialize with a README (you already have one).
5. Click **Create repository**.

---

### ✅ 2. Link Your Local Project to GitHub

In your terminal:

```bash
cd path/to/car-dealership
git remote add origin https://github.com/yourusername/car-dealership.git
git branch -M main
git push -u origin main
```

🔁 Replace `yourusername` with your actual GitHub username.

---

### ✅ 3. Add Your Teammate as a Collaborator

1. On GitHub, go to your repo: `https://github.com/yourusername/car-dealership`
2. Click **Settings** > **Collaborators**
3. Click **Add people**
4. Enter your teammate’s **GitHub username or email**
5. Send the invite. They must accept it.

---

### ✅ 4. Your Teammate Clones the Project

Your teammate should run:

```bash
git clone https://github.com/yourusername/car-dealership.git
cd car-dealership
npm install
```

They now have a working copy of the project.

---

### ✅ 5. Working as a Team (Git Flow)

**Each member should:**

- Create a feature branch:

  ```bash
  git checkout -b feature/some-feature-name
  ```

- After making changes:

  ```bash
  git add .
  git commit -m "Add: new feature"
  git push origin feature/some-feature-name
  ```

- Open a **Pull Request** on GitHub to merge into `main`.

---

### ✅ 6. Syncing Changes from Main

To pull the latest version of the main branch:

```bash
git checkout main
git pull origin main
```

---
