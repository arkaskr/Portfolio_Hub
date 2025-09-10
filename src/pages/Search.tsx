import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { 
  Search as SearchIcon, 
  MapPin, 
  GraduationCap, 
  Star, 
  ExternalLink, 
  Heart,
  Filter,
  SortAsc
} from 'lucide-react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const [educationFilter, setEducationFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const [students] = useState([
    {
      id: 1,
      name: 'Alex Smith',
      email: 'alex.smith@university.edu',
      avatar: '',
      bio: 'Passionate full-stack developer with experience in building scalable web applications.',
      location: 'San Francisco, CA',
      education: 'Computer Science @ Stanford University',
      primarySkills: ['React', 'Node.js', 'AWS'],
      allSkills: ['React', 'Node.js', 'AWS', 'Python', 'MongoDB', 'TypeScript'],
      projectCount: 15,
      profileViews: 1234,
      likes: 89,
      joinedDate: '2024-01-15',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@university.edu',
      avatar: '',
      bio: 'Data scientist and machine learning enthusiast with a passion for solving complex problems.',
      location: 'New York, NY',
      education: 'Data Science @ MIT',
      primarySkills: ['Python', 'TensorFlow', 'SQL'],
      allSkills: ['Python', 'TensorFlow', 'SQL', 'R', 'Jupyter', 'Pandas'],
      projectCount: 12,
      profileViews: 987,
      likes: 76,
      joinedDate: '2024-02-01',
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike.chen@university.edu',
      avatar: '',
      bio: 'Mobile app developer specializing in React Native and iOS development.',
      location: 'Seattle, WA',
      education: 'Software Engineering @ University of Washington',
      primarySkills: ['React Native', 'Swift', 'JavaScript'],
      allSkills: ['React Native', 'Swift', 'JavaScript', 'iOS', 'Android', 'Flutter'],
      projectCount: 8,
      profileViews: 654,
      likes: 45,
      joinedDate: '2024-03-10',
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@university.edu',
      avatar: '',
      bio: 'UI/UX designer with development skills in modern frontend frameworks.',
      location: 'Austin, TX',
      education: 'Design & Computer Science @ UT Austin',
      primarySkills: ['Figma', 'React', 'CSS'],
      allSkills: ['Figma', 'React', 'CSS', 'Adobe XD', 'JavaScript', 'Sass'],
      projectCount: 10,
      profileViews: 876,
      likes: 92,
      joinedDate: '2024-01-20',
    },
  ]);

  const [filteredStudents, setFilteredStudents] = useState(students);

  const filterStudents = () => {
    let filtered = students.filter(student => {
      const matchesSearch = !searchQuery || 
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.allSkills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesSkill = !skillFilter || 
        student.allSkills.some(skill => skill.toLowerCase().includes(skillFilter.toLowerCase()));
      
      const matchesEducation = !educationFilter || 
        student.education.toLowerCase().includes(educationFilter.toLowerCase());
      
      const matchesLocation = !locationFilter || 
        student.location.toLowerCase().includes(locationFilter.toLowerCase());

      return matchesSearch && matchesSkill && matchesEducation && matchesLocation;
    });

    // Sort filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'views':
          return b.profileViews - a.profileViews;
        case 'likes':
          return b.likes - a.likes;
        case 'projects':
          return b.projectCount - a.projectCount;
        case 'recent':
        default:
          return new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime();
      }
    });

    setFilteredStudents(filtered);
  };

  React.useEffect(() => {
    filterStudents();
  }, [searchQuery, skillFilter, educationFilter, locationFilter, sortBy]);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Discover Talented Students</h1>
        <p className="text-muted-foreground">Find the perfect candidates for your team</p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Main Search */}
            <div className="relative">
              <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, skills, or bio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Skills</label>
                <Input
                  placeholder="e.g., React, Python"
                  value={skillFilter}
                  onChange={(e) => setSkillFilter(e.target.value)}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Education</label>
                <Input
                  placeholder="e.g., Computer Science"
                  value={educationFilter}
                  onChange={(e) => setEducationFilter(e.target.value)}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Location</label>
                <Input
                  placeholder="e.g., San Francisco"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                    <SelectItem value="views">Most Viewed</SelectItem>
                    <SelectItem value="likes">Most Liked</SelectItem>
                    <SelectItem value="projects">Most Projects</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {filteredStudents.length} student{filteredStudents.length !== 1 ? 's' : ''} found
          </span>
        </div>
        <div className="flex items-center gap-2">
          <SortAsc className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Sorted by {sortBy.replace('_', ' ')}
          </span>
        </div>
      </div>

      {/* Student Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={student.avatar} alt={student.name} />
                  <AvatarFallback className="text-lg">
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

                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {student.bio}
              </p>

              <div>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-3 w-3 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground">Primary Skills</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {student.primarySkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{student.projectCount} projects</span>
                <span>{student.profileViews} views</span>
                <span>{student.likes} likes</span>
              </div>

              <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Profile
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredStudents.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No students found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSkillFilter('');
                setEducationFilter('');
                setLocationFilter('');
              }}
            >
              Clear All Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Search;