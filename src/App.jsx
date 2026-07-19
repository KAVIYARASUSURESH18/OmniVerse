import ProtectedRoute from "./components/common/ProtectedRoute";


<Route

path="/profile"

element={

<ProtectedRoute>

<Profile />

</ProtectedRoute>

}

/>
