class User {
    constructor(name, role) {
        if (name && (role === "admin" || role === "user")) {
            this.name = name,
                this.role = role
        } else {
            alert("Нет такого юзера, выходи лох")
        }
    }
    getName() {
        return this.name
    }
    getRole() {
        return this.role
    }

    login() {

    }

    logout() {

    }

    changeName(newName) {
        this.name = newName
    }
    changePassword(newPassword) {}
}

class Admin extends User {
    constructor(name) {
        super(name, 'admin')
        this.users = []
    }
    addUser(user) {
        if (user instanceof User) {
            this.users.push(user);
        } else {
            alert('Invalid data for adding a User!');
        }
    }
    removeUser(user) {
        const index = this.users.indexOf(user);
        if (index > -1) {
            this.users.splice(index, 1);
        }
    }
    changeUserRole(user, newRole) {
        if (user instanceof User && (newRole === 'admin' || newRole === 'user')) {
            user.role = newRole;
        } else {
            alert('Invalid data for changing user role!');
        }
    }
    getAllUsers() {
        return this.users;
    }
    removeAllUsers() {
        this.users = [];
    }
}