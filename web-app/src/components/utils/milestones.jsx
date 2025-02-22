export const getPregnancyMilestone = (week) => {
    const milestones = [
      { week: 1, milestone: "Your baby is just a fertilized egg and is growing rapidly!" },
      { week: 12, milestone: "Your baby's heart begins to beat!" },
      { week: 24, milestone: "Your baby can now hear sounds around them!" },
      { week: 36, milestone: "You are getting closer to your due date!" },
    ];
  
    const milestone = milestones.find((m) => week >= m.week);
    return milestone ? milestone.milestone : "Enjoy your pregnancy journey! 💕";
  };
  