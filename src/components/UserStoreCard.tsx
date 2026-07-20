import {
  useUserStore,
  type User,
} from "../store/useUserStore";

import "./UserStoreCard.css";

const demoUser: User = {
  id: 1,
  name: "Emir Şeren",
  role: "Full-Stack Öğrencisi",
};

function UserStoreCard() {
  const user = useUserStore(
    (state) => state.user,
  );

  const login = useUserStore(
    (state) => state.login,
  );

  const logout = useUserStore(
    (state) => state.logout,
  );

  const isAuthenticated = user !== null;

  return (
    <section
      className="user-store-card"
      aria-labelledby="user-store-title"
    >
      <p className="route-eyebrow">
        Zustand Mini Store
      </p>

      <h2 id="user-store-title">
        Global Kullanıcı Durumu
      </h2>

      <p className="user-store-description">
        Bu kullanıcı bilgisi component state’inde değil,
        Zustand store’unda tutuluyor.
      </p>

      {isAuthenticated ? (
        <div className="user-profile">
          <div>
            <p className="user-profile-label">
              Oturum açık
            </p>

            <p className="user-profile-name">
              {user.name}
            </p>

            <p className="user-profile-role">
              {user.role}
            </p>
          </div>

          <button
            type="button"
            onClick={logout}
          >
            Çıkış yap
          </button>
        </div>
      ) : (
        <div className="user-profile">
          <div>
            <p className="user-profile-label">
              Oturum kapalı
            </p>

            <p className="user-profile-name">
              Misafir kullanıcı
            </p>

            <p className="user-profile-role">
              Demo kullanıcıyla giriş yapabilirsin.
            </p>
          </div>

          <button
            type="button"
            onClick={() => login(demoUser)}
          >
            Demo giriş yap
          </button>
        </div>
      )}
    </section>
  );
}

export default UserStoreCard;