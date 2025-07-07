 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/README.md
index 0000000000000000000000000000000000000000..98ba106950609d4dfbd3a1f7cb8382d65fc73b38 100644
--- a//dev/null
+++ b/README.md
@@ -0,0 +1,14 @@
+# Futurepath Student Dashboard
+
+A simple static dashboard for students built with HTML and CSS. The pages use the Futurepath brand colors and Roboto font.
+
+## Pages
+
+- `index.html` - Dashboard home with quick overview cards.
+- `assignments.html` - Placeholder for upcoming assignments.
+- `schedule.html` - Placeholder for the student's schedule.
+- `profile.html` - Placeholder for profile details.
+
+## Running
+
+Open `index.html` in your browser to view the dashboard locally. No build step is required.
 
EOF
)
