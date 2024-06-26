import { useRouter } from "next/navigation";
import useIsSignedInStore from "../_stores/useIsSignedInStore";

function useToSignInPage() {
  const { isSignedIn } = useIsSignedInStore();
  const router = useRouter();

  const toSignInPage = (): boolean => {
    if (!isSignedIn)
      if (confirm("You are not signed in. Would you like to sign in?")) {
        router.push("/sign-in");
        return false;
      } else {
        alert("Cancel.");
        return false;
      }
    return true;
  };

  return { toSignInPage };
}

export default useToSignInPage;
