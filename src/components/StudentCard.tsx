import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  GraduationCap, 
  Star, 
  ExternalLink, 
  Heart,
  Eye,
  MessageCircle
} from 'lucide-react';

interface StudentCardProps {
  student: {
    id: number;
    name: string;
    email: string;
    avatar: string;
    bio: string;
    location: string;
    education: string;
    primarySkills: string[];
    projectCount: number;
    profileViews: number;
    likes: number;
  };
  onViewProfile?: (studentId: number) => void;
  onLike?: (studentId: number) => void;
  showStats?: boolean;
}

const StudentCard: React.FC<StudentCardProps> = ({ 
  student, 
  onViewProfile, 
  onLike, 
  showStats = true 
}) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-border/50">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
            <AvatarImage src={student.avatar} alt={student.name} />
            <AvatarFallback className="text-lg bg-gradient-to-br from-primary to-purple-600 text-white">
              {getInitials(student.name)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {student.name}
            </CardTitle>
            <CardDescription className="flex items-center gap-1 mt-1">
              <GraduationCap className="h-3 w-3" />
              {student.education}
            </CardDescription>
            <CardDescription className="flex items-center gap-1 mt-1">
              <MapPin className="h-3 w-3" />
              {student.location}
            </CardDescription>
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500"
            onClick={(e) => {
              e.stopPropagation();
              onLike?.(student.id);
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {student.bio}
        </p>

        <div>
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-3 w-3 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">Primary Skills</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {student.primarySkills.slice(0, 4).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {student.primarySkills.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{student.primarySkills.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {showStats && (
          <>
            <Separator />
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-1">
                  <Eye className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs font-medium">{student.profileViews}</span>
                </div>
                <span className="text-xs text-muted-foreground">Views</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-1">
                  <Heart className="h-3 w-3 text-red-500" />
                  <span className="text-xs font-medium">{student.likes}</span>
                </div>
                <span className="text-xs text-muted-foreground">Likes</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-1">
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs font-medium">{student.projectCount}</span>
                </div>
                <span className="text-xs text-muted-foreground">Projects</span>
              </div>
            </div>
          </>
        )}

        <Button 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onViewProfile?.(student.id);
          }}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View Full Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default StudentCard;