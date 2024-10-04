import { Button } from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { surveyQuestions } from "@/config/data";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

type FormData = {
  questions: string;
  answer: string;
  other?: string;
};

export default function Onboarding(props) {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    questions: string,
    index: number
  ) => {
    const { value } = e.target;
    const tmpData = [...formData];
    tmpData[index] = { questions, answer: value, other: "" };
    setFormData(tmpData);
  };

  const handleInputChangeOther = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const tmpData = [...formData];
    tmpData[Number(id)] = { ...tmpData[Number(id)], other: value };
    setFormData(tmpData);
  };

  const handleSelectChange = (
    value: string,
    questions: string,
    index: number
  ) => {
    const tmpData = [...formData];
    tmpData[index] = { questions, answer: value, other: "" };
    setFormData(tmpData);
  };

  const handleNextStep = () => {
    if (
      currentStep < surveyQuestions.length - 1 &&
      formData[currentStep] !== undefined
    ) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);

    await formData.map(async (x) => {
      await fetch("/api/user/onboarding/create", {
        method: "POST",
        body: JSON.stringify(x),
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${getAccessToken()}`,
        },
      });
    });

    const session = await getSession();
    if (session.user.projects.length !== 0) {
      router.push(`/project/${session.user.projects[0].id}/inbox`);
    } else {
      router.push("/project/create");
    }
  };

  const currentQuestion = surveyQuestions[currentStep];

  return (
    <DashboardLayout>
      <div className="px-4 grid h-screen place-items-center">
        <div>
          <Card className="w-[600px]">
            <CardHeader>
              <CardTitle className="text-center mb-6">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {currentQuestion.type === "select" ? (
                <div>
                  <Select
                    onValueChange={(e) =>
                      handleSelectChange(
                        e,
                        currentQuestion.question,
                        currentStep
                      )
                    }
                    value={formData[currentStep]?.answer || ""}
                  >
                    <SelectTrigger id={currentQuestion.id}>
                      <SelectValue placeholder={currentQuestion.placeholder} />
                    </SelectTrigger>
                    <SelectContent position="popper" className="bg-white">
                      {currentQuestion.options?.map((option) => (
                        <SelectItem
                          className="hover:bg-primary focus:bg-primary hover:text-white focus:text-white"
                          value={option}
                          key={option}
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formData[currentStep]?.answer
                    .toLowerCase()
                    .includes("other") && (
                    <div className="flex flex-col space-y-1.5 mt-4">
                      <Label htmlFor="other">Others</Label>
                      <Input
                        id={`${currentStep}`}
                        placeholder="Input others value"
                        value={formData[currentStep]?.other}
                        onChange={handleInputChangeOther}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <Input
                  type={currentQuestion.type}
                  id={`${currentStep}`}
                  placeholder={currentQuestion.placeholder}
                  value={formData[currentStep]?.answer}
                  onChange={(e) =>
                    handleInputChange(e, currentQuestion.question, currentStep)
                  }
                />
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {currentStep > 0 ? (
                <Button
                  variant="outline"
                  className="hover:bg-white"
                  onClick={handlePreviousStep}
                >
                  Previous
                </Button>
              ) : (
                <div></div>
              )}
              {currentStep < surveyQuestions.length - 1 ? (
                <Button className="text-white" onClick={handleNextStep}>
                  Next
                </Button>
              ) : (
                <Button
                  className="text-white"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  Submit
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
