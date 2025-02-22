import 'package:custom_widgets_toolkit/custom_widgets_toolkit.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:page_transition/page_transition.dart';
import 'package:techstars_hackathon/views/onboarding/who_are_you.dart';

class Onboarding3 extends StatelessWidget {
  const Onboarding3({super.key});

  @override
  Widget build(BuildContext context) {
    final MediaQueryData mediaQuery = MediaQuery.of(context);
    final ThemeData themeData = Theme.of(context);
    final bool isDarkMode = themeData.brightness == Brightness.dark;
    final double width = mediaQuery.size.width;
    final double height = mediaQuery.size.height;

    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16),
        child: SizedBox(
          height: height,
          child: Column(
            children: [
              SizedBox(height: kToolbarHeight,),
              CustomText("Chat with our AI model for assistance", fontSize: 24, color: Colors.black, fontWeight: FontWeight.bold,),

              Expanded(child: SvgPicture.asset("assets/svgs/filled_ai_sparkle.svg")),

              CustomText("Chat with our smart Assistant to get quick and personalized assistance."),

              Padding(
                padding: const EdgeInsets.only(bottom: 32),
                child: Align(
                  alignment: Alignment.centerRight,
                  child: IconButton(
                    style: ButtonStyle(backgroundColor: WidgetStatePropertyAll(themeData.primaryColorDark)),
                    onPressed: () {
                      Navigator.of(context).push(
                        PageTransition(
                          type: PageTransitionType.rightToLeftWithFade,
                          child: WhoAreYou(),
                          duration: Durations.extralong1,
                          curve: CustomCurves.defaultIosSpring,
                        ),
                      );
                    },
                    icon: Icon(Icons.arrow_forward_rounded, color: Colors.white, size: 40),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
