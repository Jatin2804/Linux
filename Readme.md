# Linux File System Structure

According to the Filesystem Hierarchy Standard (FHS):

- `/` – The root directory; everything is under it.
- `/bin` – Essential user binaries (programs).
- `/etc` – Configuration files.
- `/home` – User home directories.
- `/opt` – Optional software packages.
- `/root` – Home directory for the root user.
- `/sbin` – System administration binaries.
- `/tmp` – Temporary files.
- `/usr` – User binaries and read-only data.
- `/var` – Variable data, such as logs and temporary data.

---

# Basic Commands

## Navigation & Directory Commands

- `pwd` (Print Working Directory): Shows the current directory path.
- `ls` (List): Lists files and directories in the current location.
    - `ls -a`: Shows all files, including hidden ones (`.` and `..`).
    - `ls -l`: Displays detailed information (permissions, size, owner, etc.).
- `mkdir dir` (Make Directory): Creates a new directory named `dir`.
    - `mkdir -p dir1/dir2/dir3`: Creates all directories in the specified path.
- `cd dir` (Change Directory): Moves into the specified directory.
    - `cd ..`: Moves one directory up.
    - `cd /`: Moves to the root directory (`/`).
    - `cd -`: Switches back to the last directory you were in.

## File & Text Handling

- `clear`: Clears the terminal screen.
- `touch file1.txt`: Creates an empty file named `file1.txt`.
- `nano file1.txt`: Opens the Nano editor to edit the file.
- `cat file1.txt` (Concatenate): Displays the content of the file.
- `less file1.txt`: Views the file’s content one page at a time (useful for large files).

## File Operations

- `mv file1.txt file2.txt` (Move): Renames `file1.txt` to `file2.txt` or moves it to another location.
- `cp file1.txt file2.txt` (Copy): Creates a copy of `file1.txt` as `file2.txt`.
- `rm file1.txt` (Remove): Deletes `file1.txt`.

## Directory Deletion

- `rmdir dir` (Remove Directory): Deletes an empty directory named `dir`.
- `rm -R dir` (Remove Recursively): Deletes a directory and all its contents (files and subdirectories).

---

# System Commands

- `ifconfig` (Interface Configuration): Displays/configures network interfaces (IP, MAC, etc.).
    - Example: `ifconfig` (Shows all network details).
    - Note: Use `ip a` in newer Linux versions.
- `uname -a` (Unix Name - All Info): Shows system info (kernel, OS, architecture).
    - Example: `uname -a` (Displays full system details).

---

# File Permissions System

Linux enforces file permissions to ensure proper access control:

### Owner Types

1. **User**: The file owner.
2. **Group**: A group of users.
3. **Others**: Users with read-only, execute, or restricted access.

### Permission Types

- **Read (r)**, **Write (w)**, **Execute (x)**.

### Commands

- `$ ls -l`: Lists directory contents in a detailed format, showing permissions, ownership, size, and modification time.
    - Example: `drwxrwxr-x 3 jatin jatin 4096 Mar 19 13:17 Coading`.

#### Understanding File Permissions (`rwxrwxr-x`)

Each file or directory has three sets of permissions:

- **Owner (rwx)** → The user can read (r), write (w), and execute (x).
- **Group (rwx)** → Users in the group can read (r), write (w), and execute (x).
- **Others (r-x)** → Other users can only read (r) and execute (x), but not write (-w-).

#### To Change Permissions

- `$ chmod <absolute code> <filename>`: Changes permissions for all three owners.
    - Example: `chmod 764 file.txt` (Owner: rwx, Group: rw, Others: r).
- `$ chmod <symbol> <filename>`: Changes permissions in a specific mode.
    - Example: `chmod o=rwx file.txt` or `chmod o-r file.txt`.

#### To Change Ownership

- `sudo chown <user> <filename>`: Changes the owner of the file.
- `sudo chown <user>:<group> <filename>`: Changes both the owner and group.
- `sudo chgrp <group> <filename>`: Changes the group of the file.

---

# Tips on User Groups

- `/etc/group`: Contains group information for the system.
- `groups`: Displays the groups that the specified user is a member of.
- `newgrp`: Temporarily changes the current group ID during a login session.

---

# Pipes

- **Symbol**: `|` (Pipe symbol).
- **Purpose**: Allows the output of one command to be used as the input for another command.
    - Example: `ls -l | grep "file"` (Lists files in detailed format and filters results containing "file").

---

# Additional Commands

### Sorting

- `sort filename.txt`: Sorts data alphabetically.
- `sort -r filename.txt`: Reverses the sorting order.
- `sort -n filename.txt`: Sorts numerically.
- `sort -f filename.txt`: Performs case-insensitive sorting.

### Word Count

- `grep -o -i "word" file.txt | wc -l`: Counts occurrences of a word in a file.

### Line Printing

- `head -n 3 file.txt`: Prints the first 3 lines.
- `tail -n 10 file.txt`: Prints the last 10 lines.
- `sed -n '100,200p' file.txt`: Prints lines 100 to 200.

### Unique Word Count

- `tr '[:space:]' '[\n*]' < file.txt | sort | uniq | wc -l`: Counts the number of unique words in a file.

---

# Bread and Butter Commands

### Essential Commands

1. `man`: Displays the manual for a command.
     - Example: `man ls`.
2. `cd`: Navigates between directories.
     - Example: `cd /var/log`.
3. `mkdir`: Creates a new directory.
     - Example: `mkdir -p a/b/c`.
4. `mv`: Moves or renames files and directories.
     - Example: `mv file1.txt file2.txt`.
5. `cp`: Copies files and directories.
     - Example: `cp -r dir1 dir2`.
6. `ls`: Lists files in a directory.
     - Example: `ls -alh`.
7. `pwd`: Displays the full path of the current directory.
8. `rm`: Deletes files and directories.
     - Example: `rm -rf /tmp/test_folder`.
9. `chmod`: Modifies file permissions.
     - Example: `chmod +x script.sh`.
10. `chown`: Changes file ownership.
        - Example: `chown user:user file.txt`.
11. `sudo`: Executes commands as root.
        - Example: `sudo apt update`.
12. `apt`: Manages packages on Debian-based systems.
        - Example: `sudo apt install tree`.
13. `touch`: Creates an empty file.
        - Example: `touch file.txt`.
14. `cat`: Displays file contents.
        - Example: `cat file.txt`.
15. `less` & `more`: Views file contents page-by-page.
16. `tail`: Views the last N lines of a file.
        - Example: `tail -f log.txt`.
17. `rsync`: Syncs files between directories or remote systems.
18. `grep`: Searches in files.
        - Example: `grep "error" logfile.txt`.
19. `find`: Finds files.
        - Example: `find /home -name "*.txt"`.
20. `sort`: Sorts lines in a file.
21. `date`: Displays the system date and time.
22. `tree`: Displays a directory tree.
23. `wc`: Counts words, lines, or characters in a file.

---

# OS/Process Related Commands

- `ps`: Shows running processes.
- `top`: Monitors system resource usage.
- `df`: Displays disk usage.
- `uname`: Shows system information.
- `free`: Displays memory usage.
- `lspci`: Lists PCI devices.
- `kill`: Terminates a process.

---

# Network Related Commands

- `ping`: Checks network connectivity.
- `ifconfig`: Displays network interfaces.
- `ssh`: Connects to a remote system.

---

# Bash Related Commands

- `xargs`: Converts input to arguments.
- `printenv`: Displays environment variables.
- `nano`: Opens a simple text editor.
- `awk`: Processes text.
- `sed`: Performs stream editing (find & replace).
- Pipe (`|`): Passes output of one command as input to another.

###main feature

