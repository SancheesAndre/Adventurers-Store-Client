import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_BASE,
    });

    this.api.interceptors.request.use((config) => {
      // Verifica se já temos as informações do usuário logado no localStorage
      const storedUser = localStorage.getItem("loggedInUser");

      const loggedInUser = JSON.parse(storedUser || '""');

      if (loggedInUser.token) {
        config.headers = {
          Authorization: `Bearer ${loggedInUser.token}`,
        };
      }

      return config;
    });
  }

  async signUp(user) {
    return await this.api.post("/signup", user);
  }

  async login(user) {
    return await this.api.post("/login", user);
  }

  async backpack() {
    const res = await this.api.get("/backpack")
    return res.data
  }

  async getItems() {
    const res = await this.api.get("/items")
    return res.data
  }

  async getCharInfo() {
    const res = await this.api.get("/profile")
    return res.data
  }

  async purchaseItem(id) {
    const res = await this.api.post(`/purchase/${id}`)
    return res.data
  }

  async sellItem(id) {
    const res = await this.api.put(`/sell/${id}`)
    return res.data
  }

  async subtractGold(id) {
    const res = await this.api.patch(`/purchase/${id}`)
    return res.data
  }

  async addGold(id) {
    const res = await this.api.patch(`/sell/${id}`)
    return res.data
  }
}

export default new ApiService();
