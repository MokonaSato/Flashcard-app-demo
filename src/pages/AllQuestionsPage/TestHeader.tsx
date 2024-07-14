import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface TestHeaderProps {
  testName: string;
  onBackClick: () => void;
}

const TestHeader: React.FC<TestHeaderProps> = ({ testName, onBackClick }) => (
  <div className="flex items-center mb-4">
    <Button onClick={onBackClick} variant="ghost" size="sm" className="mr-2">
      <ChevronLeft size={16} />
    </Button>
    <h1 className="text-2xl font-bold">{testName}</h1>
  </div>
);

export default TestHeader;