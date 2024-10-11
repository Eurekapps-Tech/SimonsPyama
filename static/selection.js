const currentPath = document.getElementById("currentPath");
const upDir = document.getElementById("upDir");
const selectFolder = document.getElementById("selectFolder");
const fileList = document.getElementById("fileList");
const selectedItem = document.getElementById("selectedItem");

// Simulated server-side directory structure
const serverFiles = {
  "/": ["home", "usr", "var", "example.txt"],
  "/home": ["user1", "user2"],
  "/home/user1": ["documents", "images", "project.py"],
  "/home/user2": ["notes.txt", "script.sh"],
  "/usr": ["bin", "local"],
  "/var": ["log", "tmp"],
};

function loadDirectory(path) {
  currentPath.value = path;
  fileList.innerHTML = "";

  const files = serverFiles[path] || [];
  files.forEach((file) => {
    const item = document.createElement("div");
    item.className = "p-2 hover:bg-gray-100 cursor-pointer flex items-center";

    const isDirectory =
      serverFiles[path + (path.endsWith("/") ? "" : "/") + file];
    const icon = document.createElement("span");
    icon.className = "mr-2";
    icon.textContent = isDirectory ? "📁" : "📄";
    item.appendChild(icon);

    const name = document.createElement("span");
    name.textContent = file;
    item.appendChild(name);

    item.onclick = () => {
      const newPath = path + (path.endsWith("/") ? "" : "/") + file;
      if (isDirectory) {
        loadDirectory(newPath);
      } else {
        selectedItem.textContent = `Selected File: ${newPath}`;
      }
    };
    fileList.appendChild(item);
  });
}

upDir.onclick = () => {
  const parentPath = currentPath.value.split("/").slice(0, -1).join("/") || "/";
  loadDirectory(parentPath);
};

selectFolder.onclick = () => {
  selectedItem.textContent = `Selected Folder: ${currentPath.value}`;
};

// Initial load
loadDirectory("/");
