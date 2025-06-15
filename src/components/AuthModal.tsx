import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Eye } from "lucide-react";

interface AuthModalProps {
  type: 'login' | 'register' | 'recovery' | null;
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
  onSwitchToRegister: () => void;
  onSwitchToRecovery: () => void;
  onAuthSuccess?: () => void;
}

const AuthModal = ({ 
  type, 
  isOpen, 
  onClose, 
  onSwitchToLogin, 
  onSwitchToRegister, 
  onSwitchToRecovery,
  onAuthSuccess 
}: AuthModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleAuthComplete = () => {
    if (onAuthSuccess) {
      onAuthSuccess();
    }
  };

  const renderRegistrationStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-medium">1</div>
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-medium">2</div>
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-medium">3</div>
              </div>
            </div>
            <div className="text-center mb-6">
              <p className="text-sm text-gray-600">Register through social networks or email with password</p>
            </div>
            
            <h3 className="font-semibold mb-4">Login through social networks</h3>
            <Button className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 mb-6">
              <span className="mr-2">G</span>
              Google
            </Button>
            
            <h3 className="font-semibold mb-4">Or with email and password</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="example@mail.com" />
              </div>
              <div className="relative">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter password" 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-8 text-gray-500"
                >
                  <Eye size={20} />
                </button>
              </div>
            </div>
            <Button 
              onClick={() => setCurrentStep(2)}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-6"
            >
              Next
            </Button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-medium">1</div>
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-medium">2</div>
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-medium">3</div>
              </div>
            </div>
            <div className="text-center mb-6">
              <p className="text-sm text-gray-600">Fill in information about yourself and your work</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="occupation">Occupation</Label>
                <Input id="occupation" placeholder="Your occupation" />
              </div>
              <div>
                <Label htmlFor="experience">Experience</Label>
                <Input id="experience" placeholder="Years of experience" />
              </div>
              <div>
                <Label htmlFor="interests">Interests</Label>
                <Input id="interests" placeholder="Your interests" />
              </div>
            </div>
            <Button 
              onClick={() => setCurrentStep(3)}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-6"
            >
              Next
            </Button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-medium">1</div>
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-medium">2</div>
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-medium">3</div>
              </div>
            </div>
            <div className="text-center mb-6">
              <p className="text-sm text-gray-600">Choose interests for smart recommendations</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="text-left">Ancient History</Button>
                <Button variant="outline" className="text-left">Modern History</Button>
                <Button variant="outline" className="text-left">World Wars</Button>
                <Button variant="outline" className="text-left">Cultural History</Button>
                <Button variant="outline" className="text-left">Asian History</Button>
                <Button variant="outline" className="text-left">European History</Button>
              </div>
            </div>
            <Button 
              onClick={handleAuthComplete}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-6"
            >
              Complete Registration
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  const renderContent = () => {
    switch (type) {
      case 'register':
        return (
          <div>
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle className="text-2xl font-bold">Registration</DialogTitle>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </DialogHeader>
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600 mb-4">
                Already have an account? 
                <button onClick={onSwitchToLogin} className="text-purple-600 ml-1">Login</button>
              </p>
              {renderRegistrationStep()}
            </div>
          </div>
        );
      
      case 'login':
        return (
          <div>
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle className="text-2xl font-bold">Login</DialogTitle>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </DialogHeader>
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600 mb-4">
                Don't have an account yet? 
                <button onClick={onSwitchToRegister} className="text-purple-600 ml-1">Registration</button>
              </p>
              
              <h3 className="font-semibold mb-4">Login through social networks</h3>
              <Button className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 mb-6">
                <span className="mr-2">G</span>
                Google
              </Button>
              
              <h3 className="font-semibold mb-4">Or with email and password</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="loginEmail">E-mail</Label>
                  <Input id="loginEmail" type="email" placeholder="example@mail.com" />
                </div>
                <div className="relative">
                  <Label htmlFor="loginPassword">Password</Label>
                  <Input 
                    id="loginPassword" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter password" 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-8 text-gray-500"
                  >
                    <Eye size={20} />
                  </button>
                </div>
              </div>
              <Button 
                onClick={handleAuthComplete}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-6"
              >
                Login
              </Button>
              <p className="text-center text-sm text-gray-600 mt-4">
                Forgot password? 
                <button onClick={onSwitchToRecovery} className="text-purple-600 ml-1">Reset here</button>
              </p>
            </div>
          </div>
        );
      
      case 'recovery':
        return (
          <div>
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle className="text-2xl font-bold">Password Recovery</DialogTitle>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </DialogHeader>
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600 mb-6">
                Enter the email you used during registration.
              </p>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="recoveryEmail">E-mail</Label>
                  <Input id="recoveryEmail" type="email" placeholder="example@mail.com" />
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-6">
                Next
              </Button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white rounded-lg p-6">
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
