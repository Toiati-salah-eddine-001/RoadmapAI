'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useAutoResizeTextarea } from '@/hooks/use-auto-resize-textarea';
import {
  ImageIcon,
  FileUp,
  Figma,
  MonitorIcon,
  CircleUserRound,
  ArrowUpIcon,
  Paperclip,
  PlusIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <Button
      type="button"
      variant="secondary"
      className="flex w-full flex-shrink-0 items-center gap-2 rounded-full border px-3 py-2 whitespace-nowrap transition-colors sm:w-auto sm:px-4"
      style={{
        backgroundColor: '#FFFFFF',
        borderColor: '#A4DD00',
        color: '#000000',
        boxShadow: '0 2px 8px rgba(182, 245, 0, 0.1)',
      }}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Button>
  );
}

export function VercelV0Chat() {
  const [value, setValue] = useState('');
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        setValue('');
        adjustHeight(true);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center space-y-6 sm:space-y-8">
      <h1 className="text-center text-3xl font-bold sm:text-5xl" style={{ color: '#000000' }}>
        What can I help you ship?
      </h1>

      <div className="w-full">
        <div className="relative rounded-xl border-2 shadow-lg" style={{ 
          backgroundColor: '#FFFFFF',
          borderColor: '#B6F500',
          boxShadow: '0 4px 20px rgba(182, 245, 0, 0.15)'
        }}>
          <div className="overflow-y-auto">
            <Textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                adjustHeight();
              }}
              onKeyDown={handleKeyDown}
              placeholder="Ask v0 a question..."
              className={cn(
                'w-full px-4 py-3',
                'resize-none',
                'bg-transparent',
                'border-none',
                'text-sm',
                'focus:outline-none',
                'focus-visible:ring-0 focus-visible:ring-offset-0',
                'placeholder:text-sm',
                'min-h-[60px]',
              )}
              style={{
                overflow: 'hidden',
                color: '#000000',
              }}
            />
          </div>

          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="group hover:bg-secondary/50 flex items-center gap-1 rounded-lg p-2"
                style={{
                  borderColor: '#A4DD00',
                  color: '#000000',
                }}
              >
                <Paperclip className="h-4 w-4" />
                <span className="hidden text-xs transition-opacity group-hover:inline">
                  Attach
                </span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="sm"
                variant="secondary"
                className="border-border flex items-center justify-between gap-1 rounded-lg border border-dashed px-2 py-1 text-sm transition-colors"
                style={{
                  backgroundColor: '#98CD00',
                  borderColor: '#A4DD00',
                  color: '#FFFFFF',
                }}
              >
                <PlusIcon className="h-4 w-4" />
                Project
              </Button>
              <button
                type="button"
                className={cn(
                  'border-border flex items-center justify-between gap-1 rounded-lg border px-1.5 py-1.5 text-sm transition-colors',
                )}
                style={{
                  backgroundColor: value.trim() ? '#B6F500' : '#F9F9F9',
                  borderColor: '#A4DD00',
                  color: value.trim() ? '#000000' : '#808080',
                }}
              >
                <ArrowUpIcon
                  className="h-4 w-4"
                  style={{
                    color: value.trim() ? '#000000' : '#808080',
                  }}
                />
                <span className="sr-only">Send</span>
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}





export default VercelV0Chat;
