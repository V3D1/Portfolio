<template>
  <h1 class="my-3 text-center">CRUD App from reqres.in</h1>
  <section class="mx-auto">
    <table class="table table-striped table-hover align-middle">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Avatar</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in state.users.data" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>
            <img
              :src="user.avatar"
              :alt="user.first_name"
              width="50"
              class="rounded-circle"
            />
          </td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
    <ul class="pagination pagination justify-content-center">
      <li class="page-item">
        <button
          class="page-link"
          @click="prev"
          :disabled="state.users.page === 1"
          :class="state.users.page === 1 ? 'bg-primary text-light' : ''"
        >
          1
        </button>
      </li>
      <li class="page-item">
        <button
          class="page-link"
          @click="next"
          :disabled="state.users.page === state.users.total_pages"
          :class="
            state.users.page === state.users.total_pages
              ? 'bg-primary text-light'
              : ''
          "
        >
          2
        </button>
      </li>
    </ul>
  </section>
  <section class="my-5">
    <h1 class="mb-2 mt-5 text-center">CRUD CRUD app</h1>
    <h4 class="mb-2 text-center">If you want to check it, send an email to me, because i need to update the API endpoint</h4>
    <div class="col text-end">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        +
      </button>
    </div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Add a new user</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <form @submit.prevent="addUser">
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Input a name"
              v-model="state.form.name"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Input an e-mail"
              aria-describedby="emailHelp"
              v-model="state.form.email"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Avatar</label>
            <input
              type="url"
              class="form-control"
              placeholder="URL for Avatar"
              v-model="state.form.avatar"
            />
          </div>
          <button class="btn btn-primary">Add</button>
        </form>
        <h4 class="my-4 text-success">{{ status }}</h4>
      </div>
    </div>
    <table class="table table-striped table-hover align-middle">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Avatar</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in state.userscrud" :key="member._id">
          <td>{{ member._id }}</td>
          <td>
            <img
              :src="member.avatar"
              :alt="member.name"
              width="50"
              class="rounded-circle"
            />
          </td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>
            <button
              class="btn btn-warning mx-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRightUpdate"
              aria-controls="offcanvasRightUpdate"
              @click="getData(member._id)"
            >
              Upd
            </button>
            <button class="btn btn-danger" @click="destroy(member._id)">
              Del
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRightUpdate"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Update a user</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <form @submit.prevent="updateUser()">
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Input a name"
              v-model="state.updatingForm.name"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Input an e-mail"
              aria-describedby="emailHelp"
              v-model="state.updatingForm.email"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Avatar</label>
            <input
              type="url"
              class="form-control"
              placeholder="URL for Avatar"
              v-model="state.updatingForm.avatar"
            />
          </div>
          <button class="btn btn-warning">Update</button>
        </form>
        <h4 class="my-4 text-success">{{ status }}</h4>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const reqres = ref("https://reqres.in/api");
    const crudcrud = ref(
      "https://crudcrud.com/api/2ece8ef1e56d44bcb6f2e3e768034337"
    );
    //   Start of Reqres.in API
    const state = reactive({
      users: {},
      userscrud: [],
      form: {
        name: "",
        email: "",
        avatar: "",
      },
      updatingForm: {
        _id: "",
        name: "",
        email: "",
        avatar: "",
      },
    });
    onMounted(async () => {
      const { data } = await axios.get(`${reqres.value}/users`);
      state.users = data;
    });
    async function next() {
      const { data } = await axios.get(`${reqres.value}/users?page=2`);
      state.users = data;
    }
    async function prev() {
      const { data } = await axios.get(`${reqres.value}/users?page=1`);
      state.users = data;
    }
    // End of Reqres.in API

    // Start of CRUDCRUD API
    const added = ref(false);
    const updated = ref(false);
    const status = ref("");
    onMounted(async () => {
      const { data } = await axios.get(`${crudcrud.value}/users`);
      state.userscrud = data;
    });
    async function addUser() {
      if (
        state.form.email === "" ||
        state.form.name === "" ||
        state.form.avatar === ""
      ) {
        alert("Please enter all data");
      } else {
        await axios
          .post(`${crudcrud.value}/users`, state.form)
          .then(function (response) {
            if (response.status === 201) {
              status.value = "User is created";
              state.userscrud.push(response.data);
            } else status.value = "There was an error creating";
          });
        state.form.email = "";
        state.form.name = "";
        state.form.avatar = "";
        added.value = true;
        setTimeout(reload, 700);
      }
    }
    async function destroy(id) {
      await axios.delete(`${crudcrud.value}/users/${id}`);
      state.userscrud = state.userscrud.filter((member) => member._id !== id);
    }
    async function getData(id) {
      const { data } = await axios.get(`${crudcrud.value}/users/${id}`);
      state.updatingForm = data;
    }

    async function updateUser() {
      console.log(state.updatingForm);
      console.log(state.updatingForm._id);
      if (
        state.updatingForm.email === "" ||
        state.updatingForm.name === "" ||
        state.updatingForm.avatar === ""
      ) {
        alert("Please enter all data");
      } else {
        await axios.put(`${crudcrud.value}/users/${state.updatingForm._id}`, {
          name: state.updatingForm.name,
          email: state.updatingForm.email,
          avatar: state.updatingForm.avatar,
        });
      }
      status.value = "User is updated";
      updated.value = true;
      setTimeout(reload, 700);
    }
    function reload() {
      window.location.reload(true);
    }

    // END of CRUDCRUD API
    return {
      state,
      next,
      prev,
      addUser,
      reqres,
      crudcrud,
      added,
      status,
      destroy,
      getData,
      updateUser,
      reload,
    };
  },
};
</script>
<style lang=""></style>
